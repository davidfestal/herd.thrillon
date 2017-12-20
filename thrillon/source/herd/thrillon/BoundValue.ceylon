import ceylon.html {
    AttributeEntry,
    Attribute,
    InputType,
    TextArea,
    Select,
    Input,
    Node
}
import ceylon.interop.browser.dom {
    HTMLElement,
    Event
}
import herd.thrillon.internal {
    BinderAttributeValueProvider
}


"""
   A [[BoundValue]] provides a way to associate a value
   with an Html node, and bidirectionally bind it to a propety
   of the html node.

   The [[BoundValue]] interface :
   - is based on a [[WatchedValue]]
   - defines a [[binder|BoundValue.binder]] that is an [[AttributeEntry]] and that should be passed to the
   attributes of the Html node it is bound to.

   Several implementations are provided for the most common use-cases:
   [[TextAreaValue]], [[InputTextValue]], [[InputCheckedStatus]], [[SelectValue]]

   ### How it works

   Consider the following code :

   ```
      object satisfies Template {
        value textArea = TextAreaValue(ExistingWatchedValue<String>(""));

        build(JS attrs) =>
          Main {
            Div {
              TextArea {
                rows = 30;
                cols = 200;
                attributes = [ textArea.binder ];
              },
              Button {
                attributes = [
                    event.click((evt) {
                        // Displays the content of `TextArea`
                        window.alert("text = ``textArea.val``");

                        // Updates the content of `TextArea`
                        textArea.val += " - suffix";
                    })
                ];
                "Display"
              }
            }
          }
      }
      ```

   Each time the text of the [[TextArea]] Html element is changed by the user,
   it is automatically updated in the `textArea.val` value.

   Similarly, each time the `textArea.val` is assigned a new text value,
   it updates the text value of the [[TextArea]] Html element.

   """
shared interface BoundValue<T, Exists>
        given T satisfies Object
        given Exists satisfies Null {

    "The watched value this bound value is based on"
    shared formal WatchedValue<T, Exists> watchedValue;

    "Proxy property to the content of the associated watched value"
    shared T|Exists val => watchedValue.val;
    assign val {
        watchedValue.val = val;
    }

    "Custom attribute that should be added to [[attributes|Node.attributes]]
     of Html nodes.
     It is used by the framework to setup the 2-way binding to the Dom
     node value"
    shared formal AttributeEntry binder;
    
    string => val?.string else "";
}

"""
   A [[BoundValue]] that can be used with a [[TextArea]] Html node.
   Its usage is shown as an example in the main documentation of [[BoundValue]]
   """
see(`interface BoundValue`)
shared class TextAreaValue<Exists>(
        "The watched value this bound value is based on"
        shared actual WatchedValue<String, Exists> watchedValue)
        satisfies BoundValue<String, Exists>
        given Exists satisfies Null {
    
    binder => buildBinder {
        watchedValue = watchedValue;
        boundAttributeName = "value";

        AttributeEntry updateEvent(void code(Event evt)) => event.input(code);

        String extractFromDom(HTMLElement dom) {
            dynamic {
                dynamic dynaDom = dom;
                return dynaDom.\ivalue else "";
            }
        }
    };
}

"""
   A [[BoundValue]] that can be used with a [[Select]] Html node.

   ### Example

   ```
      object satisfies Template {
        value select = SelectValue(ExistingWatchedValue<String>("option1"));

        build(JS attrs) =>
          Main {
            Div {
              Select {
                attributes = [ select.binder ];

                Option { val = "option1"; "Option 1" },
                Option { val = "option2"; "Option 2" },
                Option { val = "option3"; "Option 3" }
              },
              Button {
                attributes = [
                    event.click((evt) {
                        // Displays the chosen option
                        window.alert("Current choice = ``select.val``");
                    })
                ];
                "Display"
              }
            }
          }
      }
      ```
   """
shared class SelectValue<Exists>(shared actual WatchedValue<String, Exists> watchedValue)
        satisfies BoundValue<String, Exists>
        given Exists satisfies Null {
    
    binder => buildBinder {
        watchedValue = watchedValue;
        boundAttributeName = "value";

        AttributeEntry updateEvent(void code(Event evt)) => event.change(code);

        String extractFromDom(HTMLElement dom) {
            dynamic {
                dynamic dynaDom = dom;
                return dynaDom.\ivalue else "";
            }
        }
    };
}

shared abstract class InputBoundValue<T, Exists>(
        shared Attribute<InputType>|Attribute<String> type)
        satisfies BoundValue<T, Exists>
        given T satisfies Object
        given Exists satisfies Null {
    restricted shared InputType|String|Null extractInputType(Attribute<InputType>|Attribute<String> attribute) => switch(attribute)
    case(is InputType | Null | String) attribute
    else extractInputType(attribute());
}

"""
   A [[BoundValue]] that can be used with a [[Input]] Html node and bound to its
   `value` text attribute.

   ### Example

   ```
      object satisfies Template {
        value name = InputTextValue(InputType.text, WatchedValue<String>(null));

        build(JS attrs) =>
          Main {
            Div {
              Input { type = name.type; attributes = [ name.binder ]; }
              Button {
                attributes = [
                    event.click((evt) {
                        // Displays the content of the input text
                        window.alert("Name = ``name.val else "<null>"``");
                    })
                ];
                "Display"
              }
            }
          }
      }
      ```
   """
shared class InputTextValue<Exists>(
        "The type of the Html [[Input]] this bound value will be bound to"
        Attribute<InputType>|Attribute<String> type,

        "The watched value this bound value is based on"
        shared actual WatchedValue<String, Exists> watchedValue)
        extends InputBoundValue<String, Exists>(type)
        satisfies BoundValue<String, Exists>
        given Exists satisfies Null {
    
    binder => buildBinder {
        watchedValue = watchedValue;
        boundAttributeName = "value";

        AttributeEntry updateEvent(void code(Event evt)) =>
                switch(theType = extractInputType(type))
                case(InputType.radio | InputType.checkbox | "radio" | "checkbox") event.change(code)
                else event.input(code);

        String extractFromDom(HTMLElement dom) {
            dynamic {
                dynamic dynaDom = dom;
                return dynaDom.\ivalue else "";
            }
        }
    };
}

"""
   A [[BoundValue]] that can be used with a [[Input]] Html node and bound to its
   `checked` boolean attribute.

   ### Example

   ```
      object satisfies Template {
        value checked = InputTextValue(InputType.checkbox, ExistingWatchedValue<Boolean>(false));

        build(JS attrs) =>
          Main {
            Div {
              Input { type = checked.type; attributes = [ checked.binder ]; }
              Button {
                attributes = [
                    event.click((evt) {
                        // Use the input checked status to display a message
                        window.alert(if (checked.val) then "It is checked" else "is it not checked");
                    })
                ];
                "Display"
              }
            }
          }
      }
      ```
   """
shared class InputCheckedStatus(Attribute<InputType>|Attribute<String> type, shared actual ExistingWatchedValue<Boolean> watchedValue)
        extends InputBoundValue<Boolean, Nothing>(type)
        satisfies BoundValue<Boolean, Nothing> {
    
    binder => buildBinder {
        watchedValue = watchedValue;

        boundAttributeName = "checked";

        AttributeEntry updateEvent(void code(Event evt)) {
            switch(theType = extractInputType(type))
            case(InputType.radio | InputType.checkbox | "radio" | "checkbox")  {
                return event.change(code);
            }
            else {
                dynamic { console.log("[Thrillon] WARNING: Trying to bind the 'checked' attribute on input of type:", inputType.attributeValue); }
                return "onchange" -> null;
            }
        }

        Boolean extractFromDom(HTMLElement dom) {
            Boolean checked;
            dynamic {
                dynamic dynaDom = dom;
                checked = dynaDom.checked;
            }
            return checked;
        }
    };
}

"Utility function to help construct the [[binder|BoundValue.binder]]
 when building new types of [[BoundValue]]s"
shared AttributeEntry buildBinder<T, Exists>(
    WatchedValue<T, Exists> watchedValue, 
    String boundAttributeName, 
    AttributeEntry updateEvent(void code(Event evt)), 
    T|Exists extractFromDom(HTMLElement dom)) 
        given T of Boolean | Integer | Float | String 
        given Exists satisfies Null => "``boundAttributeName``_thrillon_binder" -> BinderAttributeValueProvider(watchedValue, boundAttributeName, updateEvent, extractFromDom);


