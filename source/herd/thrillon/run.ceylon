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
    Div
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
        Button {
            attributes = [ 
                evt.click((dynamic event) { count ++; })
            ];
            
            "``count`` clicks"
        },
        Label {
            style = "color:red;";
            "Time is : ``time.get() else ""``"
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