import ceylon.html {
	Element,
	Node,
	Content,
	Attributes,
	FlowCategory
}

import herd.thrillon.jsutils {
    ...
}

"""
   This class is a wrapper on a [Mithril component](https://mithril.js.org/components.html)
   that can be inserted inside a `ceylon.html` tree structure as any other HTML [[Node]]
   """
shared class WrappedComponent (
	"The wrapped Mithril component"
	shared Component component,
	"The Javascript attributes to be used with the component"
	shared JS componentArgs() => voidJs,
	"The attributes associated with this HTML element."
    Attributes attributes = [],
    {Content<Node>*} children = [])
		extends Element("mithrilComponent", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [], children)
		satisfies FlowCategory {
}