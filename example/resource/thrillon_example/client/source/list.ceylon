import ceylon.collection { ArrayList }
import ceylon.html { ... }
import herd.thrillon { ... }

object listDemo satisfies Demo {
    value persons = ArrayList<[String, String]> {};
    
    value name = InputTextValue(InputType.text, WatchedValue<String>(null));
    value address = TextAreaValue(WatchedValue<String>(null));
    
    node(Args attrs) =>
		Div { clazz = "container";
			Div { clazz = "row";
				Div { clazz = "col";
					Form {
						Div { clazz = "form-group";
							Label {
								attributes = [ "for"-> "nameInput" ];
								"Name"
							},
							Input { clazz="form-control";
								id="nameImput";
								type = name.type;
								attributes = [
									name.binder,
									"placeholder" -> "Enter your name"
								]; }
						},
						Div { clazz = "form-group";
							Label {
								attributes = [ "for" -> "addressArea" ];
								"Address"
							},
							TextArea { clazz="form-control";
								id = "adressArea";
								attributes = [
									address.binder,
									"placeholder" -> "Enter your address"
								];
							}
						},
						Div { clazz = "input-group input-group-lg";
							Label { clazz="form-control";
								name.val else "",
								if (exists addr = address.val,
									!addr.empty)
								" - ``addr``"
							},
							Span { clazz = "input-group-btn";
								Button { clazz = "btn btn-secondary";
									type=ButtonType.button;
									attributes = [
										event.click((evt) {
											if( exists theName = name.val,
												exists theAddress = address.val) {
												persons.add([theName, theAddress]);
											}
										})
									];
									"Create"
								}
							}
						}
					}
				},
				Div { clazz = "col";
					Table { clazz = "table";
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