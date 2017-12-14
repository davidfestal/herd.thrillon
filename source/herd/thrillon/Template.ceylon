import ceylon.html {
	...
}
import herd.thrillon.internal {
	...
}

shared interface Template satisfies Component {
    shared formal Node build(JS attrs);

    shared actual VNode view(VNode node) {
        JS attrs;
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
