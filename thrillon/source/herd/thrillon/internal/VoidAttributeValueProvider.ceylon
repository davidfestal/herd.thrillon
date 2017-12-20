import ceylon.html {
	AttributeValueProvider
}

shared class VoidAttributeValueProvider(shared Anything(Nothing) code) satisfies AttributeValueProvider {
		shared actual String? attributeValue => "void f()";
	}