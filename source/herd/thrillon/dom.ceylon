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

shared AttributeEntry attachDom() => domRetrieverAttributeName -> DomAttributeValueProvider();

shared DomNode? dom(Node? node) {
	value provider = domProvider(node);
	if (exists provider) {
		return provider.dom;
	} else {
		return null;
	}
}
