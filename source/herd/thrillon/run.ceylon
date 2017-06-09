import ceylon.collection {
    ArrayList,
    MutableList
}
import ceylon.html {
    H1,
    Button,
    Main,
    Label,
    Input,
    InputType,
    Ul,
    Li,
    Div,
    H2,
    H3,
    Pre
}
import ceylon.time {
    now,
    Time
}


variable Integer count = 0;
MutableList<[String, String]> persons = ArrayList<[String, String]> {};

BoundValue<Time> time = BoundValue<Time>(null) ;

class MyTemplate() extends MithrilTemplate() {
    build() => Main {
        H1 {
            clazz = "title";
            "My First Application"
        },
        H2 {
            "Button test"
        },
        H3 {
            "Simple Ceylon value (count) is incremented on button click is directly updated in the HTML string template."
        },
        Pre {
            style = "display: block";

            """
               Button {
                 attributes = [ 
                   evt.click((dynamic event) { count ++; })
                 ];
                 "``count`` clicks"
               }
               """
        },
        Button {
            attributes = [ 
                evt.click((dynamic event) { count ++; })
            ];
            
            "``count`` clicks"
        },
        H2 {
            "Label test"
        },
        H3 {
            "Bounded value (time) is update by a timeout and the label is updated automatically."
        },
        Pre {
            style = "display: block";

            """
               BoundValue<Time> time = BoundValue<Time>(null) ;

               ...
               
               dynamic {
                 window.setInterval(() {
                   time.set(now().time());
                 }, 1000);
               }
               
               ...
               
               Label {
                 style = "color:red;";
                 "Time is : ``time.get() else ""``"
               }
               """
        },
        Label {
            style = "color:red;";
            "Time is : ``time.get() else ""``"
        },
        H2 {
            "List test"
        },
        H3 {
            "List automatically updated through a Ceylon comprehension."
        },
        Pre {
            style = "display: block";

            """
               MutableList<[String, String]> persons = ArrayList<[String, String]> {};

               ...
               
               Div {
                 Label{ "Name", Input { id = "name"; type = InputType.text; }},
                 Label{ "Address", Input { id = "address"; type = InputType.text; }},
                 Button{
                   attributes = [
                     evt.click(() {
                       String name;
                       String address;
                       dynamic {
                         name = document.getElementById("name").\ivalue;
                         address = document.getElementById("address").\ivalue;
                       }
                       persons.add([name, address]);
                     })
                   ];
                   "Add a user"
                 }
               },
               Ul {
                 for(person in persons) Li {
                   "``person[0]`` -> ``person[1]``"
                 }
               }
               """
        },
        Div {
            Label{ "Name", Input { id = "name"; type = InputType.text; }},
            Label{ "Address", Input { id = "address"; type = InputType.text; }},
            Button{ attributes = [
                evt.click(() {
                    String name;
                    String address;
                    dynamic {
                        name = document.getElementById("name").\ivalue;
                        address = document.getElementById("address").\ivalue;
                    }
                    persons.add([name, address]);
                })
                ];
                "Add a user"
            }
        },
        Ul {
             for(person in persons) Li {
                "``person[0]`` -> ``person[1]``"
             }
        }
    };
    
}


"Run the module `herd.thrillon`."
shared void run() {
  TemplateRoot? root;
  dynamic {
      root = document.body;
  }

  assert (exists root);
  
  dynamic {
      window.setInterval(() {
          time.set(now().time());
      }, 1000);
  }

  
  MyTemplate().mount(root);
}