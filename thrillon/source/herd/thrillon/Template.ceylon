import ceylon.html {
	...
}
import herd.thrillon.internal {
	...
}
import herd.thrillon.jsutils {
    ...
}

"""
   Wrapper on a [[JS]] object to be used inside the [[Template.build]] function
   """
shared dynamic Args satisfies JS {}

"""
   This is the main interface that allows integrating [[ceylon.html|module ceylon.html]]
   and Mithril.

   This interface allows defining a Mithril [[Component]] based on a Html tree returned as
   a [[Node]] by the [[build|build]] formal method.

   To create a new Mithril component, simply implement the [[Template.build|Template.build]] method
   to return a [[ceylon.html|module ceylon.html]] [[Node]] element.

   This `ceylon.html`-based Mithril component can then be attached to any Dom element
   in the DOM tree with the [[mount|mount]] function.

   #### Example

   ```
        shared void run() {
            assert (exists root = document.body);
            mount {
                parent = root;

                object component satisfies Template {
                    variable value count = 0;
                    build() =>
                        Main {
                            Div {
                                H1 {
                                    "Thrillon: Mix Mithril and Ceylon Html DSL !"
                                },
                                Button {
                                    attributes = [
                                        event.click((evt) {
                                            count ++;
                                        })
                                    ];

                                    "``count`` clicks"
                                }
                            }
                        };
                }
            };
        }
      ```


   """
shared interface Template satisfies Component {

    """
       This formal methd should be overriden in satisfying classes to
       provide the Html [[Node]] tree that will be used
       by the [[view|view]] method to build the expected
       [[VNode]] on Mithril redraws.
       """
    shared formal Node build(
        """Attributes passed to the component by Mithril during redraw.
           This corresponds to the `vnode.args` value received by the
           [[view|view]] method. For more details see
           [the Mithril documentation](https://mithril.js.org/components.html#passing-data-to-components)

           However, to facilitate the use of these Javascript raw data
           in Ceylon, they are provided as a [[JS]] object.
           This allows using the [[JsObject]] class to easily access
           its contents in a typesafe and secure way.
           """
        Args attrs
    );

    shared actual VNode view(VNode node) {
        Args attrs;
        dynamic {
            if (exists nodeAttrs = node.attrs) {
                attrs = nodeAttrs;
            } else {
                attrs = dynamic [];
            }
        }
        if (exists vnode = visit(build(attrs))) {
            return vnode;
        } else {
            assert (exists empty = visit(Div {}));
            return empty;
        }
    }
    
    void fillDomRetriever(VNode vnode, Node node, DomAttributeValueProvider provider) {
        value domSetter = setDom(provider);
        dynamic {
            dynamic oncreate;
            if (exists existingOncreate = vnode.attrs.oncreate) {
                oncreate = (VNode vn) {
                    existingOncreate(vn);
                    domSetter(vn);
                };
            } else {
                oncreate = domSetter;
            }
            \iObject.defineProperty(vnode.attrs, "oncreate", dynamic [
                writable = true;
                enumerable = true;
                configurable = true;
                \ivalue = oncreate;
            ]);
            
            dynamic onupdate;
            if (exists existingOncreate = vnode.attrs.oncreate) {
                onupdate = (VNode vn) {
                    existingOncreate(vn);
                    domSetter(vn);
                };
            } else {
                onupdate = domSetter;
            }
            \iObject.defineProperty(vnode.attrs, "onupdate", dynamic [
                writable = true;
                enumerable = true;
                configurable = true;
                \ivalue = setDom(provider);
            ]);
            dynamic attrs = vnode.attrs;
            attrs[domRetrieverAttributeName] = null;
        }
    }
    
    VNode? visit(Node node) {
        switch (node)
        case (is Comment) {
            return null;
        }
        case (is ProcessingInstruction) {
            throw Exception("Unsupported");
        }
        case (is Element) {
            return visitElement(node);
        }
        case (is Raw) {
            return visitRaw(node);
        }
    }
    
    VNode? visitElement(Element node) {
        if (is Html node) {
            throw Exception("Unsupported");
        }
        
        dynamic {
            variable DomAttributeValueProvider? domProvider = null;
            dynamic attrs = if (is WrappedComponent node) then node.componentArgs() else dynamic [];
            for (attr in node.attributes) {
                if (! exists attr) {
                    continue;
                }
                if (attr.key == domRetrieverAttributeName, 
                    is DomAttributeValueProvider provider = attr.item) {
                    domProvider = provider;
                }
                for (key->item in resolveAttribute(attr)) {
                    \iObject.defineProperty(attrs, key, dynamic [
                        writable = true;
                    enumerable = true;
                    configurable = true;
                    \ivalue = item;
                    ]);
                }
            }
            
            VNode? result = vnode {
            	element = if (is WrappedComponent node) then node.component else node.tagName;
            	attributes = attrs;
            	children = node.children.flatMap(visitChild);
            };
            
            if (exists result, exists dp = domProvider) {
                fillDomRetriever(result, node, dp);
            }
            return result;
        }
    }

    VNode? visitRaw(Raw node) {
        dynamic {
            return m.trust(node.children.first);
        }
    }
    
    {VNode|String*} visitChild(Content<Node> child) {
        if (is Null child) {
            return {};
        }																													
        else if (is String child) {
            return { child };
        }
        else if (is Node child) {
            return if(exists visited = visit(child)) then [ visited ] else [];
        }
        else if (is {<String|Node>*} child) {
            return child.flatMap(visitChild);
        }
        else {
            return visitChild(child());
        }
    }
    
    { <String-><String|Boolean|Integer|Float|Anything(Nothing)>>* } resolveAttribute(AttributeEntry? attribute) {
        if (is Null attribute) {
            return {};
        }
        function makeAttribute(<String|Boolean|Integer|Float|Anything(Nothing)>? attributeValue) =>
                if(exists attributeValue ) then attribute.key->attributeValue else null;
        
        return switch(val = attribute.item)
        case(is Null) {}
        case(is String|Boolean|Integer|Float) { makeAttribute(val) }.coalesced
        case(is AttributeValueProvider)
            if (is VoidAttributeValueProvider val) then { makeAttribute(val.code) }.coalesced
            else if (is BinderAttributeValueProvider<out Anything, out Null> val) then concatenate(resolveAttribute(val.val), resolveAttribute(val.update)).coalesced
            else if (is MultiAttributeValueProvider val) then val.providers.flatMap(resolveAttribute)
            else { makeAttribute(val.attributeValue) }.coalesced
        else resolveAttribute(attribute.key->val());
    }
}
