import ceylon.html {
    AttributeEntry,
    Node,
    Code
}
import herd.thrillon.internal {
    VoidAttributeValueProvider,
    MultiAttributeValueProvider
}

"""This top-level object provides wrapper methods
   for each Mithril lifecycle event.
   
   This allows producing an [[AttributeEntry]] from the corresponding
   event handler implemented as a Ceylon function type.
   
   #### How to use it
   
   It is used when creating the `ceylon.html` tree that will be rendered
   by a [[Template]]. Event Handlers can thus be added in the
   [[Node.attributes]] parameter of the Html Node.

   #### Example

   ```
    Pre {
        Code { clazz = "ceylon";
            attributes = [
                lifecycle.create((vnode) {
                    dynamic {
                        hljs.highlightBlock(vnode.dom);
                    }
                })
            ];
            sourceCode
        }
    }
   ```

   In this example, the [highlight.js](https://highlightjs.org/) highlighting
   is applied to the content of the [[Code]] Html node, each time the
   corresponding Dom node is created.
   """
shared object lifecycle {
    shared AttributeEntry init(void code(VNode vnode))
            => "oninit" -> VoidAttributeValueProvider(code);

    shared AttributeEntry create(void code(VNode vnode))
            => "oncreate" -> VoidAttributeValueProvider(code);

    shared AttributeEntry update(void code(VNode vnode))
            => "onupdate" -> VoidAttributeValueProvider(code);

    shared AttributeEntry createAndUpdate(void code(VNode vnode))
            => "oncreateAndUpdate" -> MultiAttributeValueProvider({ create(code), update(code) });

    shared AttributeEntry beforeRemove(void code(VNode vnode))
            => "onbeforeremove" -> VoidAttributeValueProvider(code);

    shared AttributeEntry remove(void code(VNode vnode))
            => "onremove" -> VoidAttributeValueProvider(code);

    shared AttributeEntry beforeUpdate(Boolean code(VNode vnode, VNode old))
            => "onbeforeupdate" -> VoidAttributeValueProvider(code);
}