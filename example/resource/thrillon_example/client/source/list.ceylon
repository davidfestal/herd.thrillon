import ceylon.collection {
    ArrayList
}
import ceylon.html {
    Tr,
    Button,
    THead,
    InputType,
    Form,
    TBody,
    Div,
    Input,
    Th,
    ButtonType,
    Label,
    Table
}

import herd.thrillon {
    event,
    InputTextValue,
    WatchedValue,
    JS
}

object listDemo satisfies Demo {
    value persons = ArrayList<[String, String]> {};
    
    value name = InputTextValue(InputType.text, WatchedValue<String>(null));
    value address = InputTextValue(InputType.text, WatchedValue<String>(null));
    
    node(JS attrs) =>  Div { clazz = "mui-container-fluid";
				Div { clazz = "mui-row";
					Div { clazz = "mui-col-md-6";
						Form { clazz = "mui-form";
							Div { clazz = "mui-textfield mui-textfield--float-label";
								Input { type = name.type; attributes = [ name.binder ]; },
								Label { "Name"}
							},
							Div { clazz = "mui-textfield mui-textfield--float-label";
								Input { type = address.type; attributes = [ address.binder ]; },
								Label { "Address"}
							},
							Div { clazz = "mui-textfield mui-textfield--float-label";
								Input { type = InputType.text; contentEditable = false; val = "``name.val else "unknown"`` -> ``address.val else "unknown"``"; },
								Label { "Full Description"}
							},
							Button { clazz = "mui-btn mui-btn--raised";
								type = ButtonType.button;
								attributes = [
								event.click((evt) {
									if( exists theName = name.val,
										exists theAddress = address.val) {
										persons.add([theName, theAddress]);
									}
								})
								];
								
								"Add a user"
							}
						}
					},
					Div { clazz = "mui-col-md-6";
						Table { clazz = "mui-table";
							THead {
								Tr {
									Th { "Name" }, Th { "Address" }
								}
							},
							TBody {
								for([name, address] in persons) Tr {
									Th { name }, Th { address }
								}
							}
						}
					}
				}
            };
}