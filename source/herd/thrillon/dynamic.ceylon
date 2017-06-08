shared dynamic Component {
    shared formal VNode view(VNode vnode);
}

shared dynamic VNode {
    shared formal String|Component tag;
    shared formal dynamic key;
    shared formal dynamic attrs;
    shared formal dynamic children;
    shared formal dynamic text;
    shared formal dynamic dom ;
    shared formal dynamic domSize;
    shared formal dynamic state;
    shared formal dynamic _state;
    shared formal dynamic events;
    shared formal dynamic instance;
    shared formal dynamic skip;
}

shared void mount(dynamic element, Component? component) {
    dynamic {
        m.mount(element, component);
    }
}

shared VNode vnode(String|Component element, dynamic attributes, {<VNode|String>*} children) {
    dynamic {
        dynamic jsVNodeArray = dynamic [ for (child in children) if (!is String child) child ];
        return m(
            element, 
            attributes, 
            if (is String child = children.first) then child else jsVNodeArray);
    }
}


shared dynamic TemplateRoot {
    
}
