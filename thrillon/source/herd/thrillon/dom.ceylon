import ceylon.html {
	Node,
	AttributeEntry
}
import ceylon.interop.browser.dom {
	DomNode = Node
}
import herd.thrillon.internal {
	...
}

"""
   Function that should be called as part of the Html [[Node]] attributes
   to be able to retrieve the current dom node from a Html [[Node]]
   through the [[dom]] function.

   #### Example

   ```
    button = Button {
        attributes = [
            attachDom(),
            event.click((evt) {
                value domButton = dom(button);
                if (is HtmlDomElement domButton) {
                    value style = domButton.getAttribute("style");
                    if(exists style, style == "background-color: yellow;") {
                        domButton.setAttribute("style", "background-color: blue;");
                    } else {
                        domButton.setAttribute("style", "background-color: yellow;");
                    }
                }
            })
        ];

        "Change color"
    };
    return button;

   ```
   """
shared AttributeEntry attachDom() => domRetrieverAttributeName -> DomAttributeValueProvider();

"""
   Function that retrieves the current dom node from a Html [[Node]],
   assuming that it was previously requested with the [[attachDom]] function
   """
shared DomNode? dom(Node? node) {
	value provider = domProvider(node);
	if (exists provider) {
		return provider.dom;
	} else {
		return null;
	}
}
