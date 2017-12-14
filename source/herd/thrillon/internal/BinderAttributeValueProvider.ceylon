import ceylon.html {
    AttributeValueProvider,
    AttributeEntry
}
import ceylon.interop.browser.dom {
    Event,
    HTMLElement
}
import herd.thrillon {
    WatchedValue
}

shared class BinderAttributeValueProvider<T, Exists>(WatchedValue<T, Exists> watchedValue, boundAttributeName, updateEvent, extractFromDom) 
        satisfies AttributeValueProvider
        given T of Boolean | Integer | Float | String 
        given Exists satisfies Null {
    
    String boundAttributeName;
    AttributeEntry updateEvent(void code(Event evt));
    T|Exists extractFromDom(HTMLElement dom);
    
    attributeValue => "binder(``boundAttributeName``)";

    shared AttributeEntry update =
            updateEvent((Event evt) {
        if (exists target = evt.currentTarget) {
            dynamic dynaTarget;
            HTMLElement dom;
            dynamic {
                dynaTarget = target;
                dom = dynaTarget;
            }
            watchedValue.setQuietly(extractFromDom(dom));
        }
    });

    shared AttributeEntry val = boundAttributeName -> (watchedValue.val of Boolean | Integer | Float | String | Exists);
}
