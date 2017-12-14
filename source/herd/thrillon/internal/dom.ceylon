import ceylon.html {
	Node,
	AttributeValueProvider
}
import ceylon.interop.browser.dom {
	DomNode = Node
}
import herd.thrillon {
	VNode
}

shared DomAttributeValueProvider? domProvider(Node? node) =>
	node?.attributes?.coalesced?.map((key->item)=> 
		if (key == domRetrieverAttributeName, 
		    is DomAttributeValueProvider item)
		then item
		else null)?.first;

shared class DomAttributeValueProvider(shared variable DomNode? dom = null) satisfies AttributeValueProvider {
	shared actual String? attributeValue => "DomNode? domRetriever()";
}

shared String domRetrieverAttributeName = "domRetriever";

shared void setDom(DomAttributeValueProvider theDomProvider)(VNode vn) {
	DomNode? domNode;
	dynamic {
		domNode = vn.dom;
	}
	theDomProvider.dom = domNode;
}