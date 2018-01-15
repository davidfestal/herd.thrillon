import ceylon.interop.browser.dom {
    DomElement=Element
}

import mithril { ... }

"Ceylon binding for a Mithril [Component](https://mithril.js.org/components.html)"
shared dynamic Component {
    shared formal VNode view(VNode vnode);
}

"Ceylon binding for a Mithril [VNode](https://mithril.js.org/vnodes.html)"
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

"Activates a component, enabling it to autoredraw on user events.
 
 This a wrapper on the corresponding Mithril API:
 [m.mount()](https://mithril.js.org/mount.html)"
shared void mount(DomElement parent, Component? component) {
    dynamic {
        m.mount(parent, component);
    }
}

"Creates a virtual node (VNode).
 
 This a wrapper on the main hyperscript function of the Mithril API:
 [m()](https://mithril.js.org/hyperscript.html)"
shared VNode vnode(String|Component element, dynamic attributes, {<VNode|String>*} children) {
    dynamic {
        return m(
            element, 
            attributes, 
            dynamic [ for (child in children) child ]);
    }
}
