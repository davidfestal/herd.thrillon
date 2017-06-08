import ceylon.html {
    ...
}


shared abstract class MithrilTemplate() {
    shared formal Node build();

    class VoidAttributeValueProvider(shared Anything(Nothing) code) satisfies AttributeValueProvider {
        shared actual String? attributeValue => "void f()";
    }
    
    shared AttributeValueProvider fun(Anything(Nothing) code)
            => VoidAttributeValueProvider(code);
    
    shared void mount(TemplateRoot container) {
        dynamic {
            m.mount(container, component());
        }
    }

    shared object evt {
        shared AttributeEntry click(Anything(Nothing) code) {
            return "onclick" -> fun(code);
        }
        shared AttributeEntry submit(Anything(Nothing) code) {
            return "onsubmit" -> fun(code);
        }
    }
    
    shared Component component() => 
        object satisfies Component {
            shared actual VNode view(VNode parent) {
                if (exists vnode = visit(build())) {
                    return vnode;
                } else {
                    assert (exists empty = visitChild("").first);
                    return empty;
                }
            }
        };
    
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
            throw Exception("Unsupported");
        }
    }
    
    VNode? visitElement(Element node) {
        if (is Html node) {
            throw Exception("Unsupported");
        }
        
        dynamic {
            dynamic attrs = dynamic [];
            for (attr in node.attributes) {
                if (exists key->item = resolveAttribute(attr)) {
                    \iObject.defineProperty(attrs, key, dynamic [
                    writable = true;
                    enumerable = true;
                    configurable = true;
                    \ivalue = item;
                    ]);
                }
            }
            
            return vnode(node.tagName, attrs,  expand {
                for (child in node.children) visitChild(child) 
            });
        }
    }
    
    {VNode*} visitChild(Content<Node> child) {
        if (is Null child) {
            return {};
        }
        else if (is String child) {
            VNode textNode;
            dynamic {
                textNode = vnode("span", dynamic [], { child });
            }
            return { textNode };
        }
        else if (is Node child) {
            return  { visit(child) }.coalesced;
        }
        else if (is {<String|Node>*} child) {
            return expand { 
                for (elt in child) visitChild(elt)
            };
        }
        else {
            return visitChild(child());
        }
    }
    
    <String-><String|Boolean|Integer|Float|Anything(Nothing)>>? resolveAttribute(AttributeEntry? attribute) {
        if (is Null attribute) {
            return null;
        }
        function makeAttribute(<String|Boolean|Integer|Float|Anything(Nothing)>? attributeValue) =>
                if(exists attributeValue ) then attribute.key->attributeValue else null;
        
        return switch(val = attribute.item)
        case(is Null) null
        case(is String|Boolean|Integer|Float) makeAttribute(val)
        case(is AttributeValueProvider)
            if (is VoidAttributeValueProvider val) then makeAttribute(val.code)
            else makeAttribute(val.attributeValue)
        else resolveAttribute(attribute.key->val());
    }
}
