import ceylon.html {
	Element,
	Node,
	Content,
	Attributes,
	FlowCategory
}

JS voidJs() {
    dynamic {
        return dynamic [];
    }
}

shared class WrappedComponent (
	"The wrapped Mithril component"
	shared Component component,
	"The Javascript attributes to be used with the component"
	shared JS componentArgs() => voidJs(),
	"The attributes associated with this HTML element."
    Attributes attributes = [],
    {Content<Node>*} children = [])
		extends Element("mithrilComponent", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [], children)
		satisfies FlowCategory {
}