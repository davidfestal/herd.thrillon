import ceylon.html {
    AttributeEntry,
    AttributeValueProvider
}

shared class MultiAttributeValueProvider(shared {AttributeEntry+} providers)
    satisfies AttributeValueProvider {
    shared actual String? attributeValue => "multiAttributeProvider";
}