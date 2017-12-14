import ceylon.html {
	AttributeEntry,
	Node
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
   
   ```
   function buttonWitOnClickHandler() => Button {
        attributes = [
        	lifecycle.update((vnode) {
        	    doAnActionOnVNode(vnode)
        	});
        ];
        "Standard Button"
   }
   ```
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