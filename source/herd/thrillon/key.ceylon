import ceylon.html {
	AttributeEntry
}

shared object key {
    shared String attributeName = "key";
    shared AttributeEntry build(String builder()) => attributeName -> builder();
    shared AttributeEntry set(String keyValue) => attributeName -> keyValue;
}
