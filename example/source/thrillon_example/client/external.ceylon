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
    Table,
    Node
}
import mithril.slider { slider }

import herd.thrillon {
    Component,
    event,
    InputTextValue,
    WatchedValue,
    WrappedComponent,
    JS,
    Template,
    JsPath,
    jsType,
    JsObject,
    vnode
}

object externalDemo satisfies Demo {
    Component theSlider;
    dynamic {
        theSlider = slider;
    }
    value persons = ArrayList<[String, String]> {};

    value name = InputTextValue(InputType.text, WatchedValue<String>(null));
    value address = InputTextValue(InputType.text, WatchedValue<String>(null));

    object page satisfies Template {
        shared actual Node build(JS attrs) =>
                let(opts = JsPath(JsObject(attrs)))
                if (exists imageFile = opts.get("data").str,
                    exists url = `module`.resourceByPath("images/``  imageFile ``")?.uri)
                then
                    Div {
                        style = "height: 480px;
                                 width: 640px;
                                 top: 0;
                                 float: left;
                                 background-image: url(`` url ``);";
                    }
                else
                    Div {
                        "No image"
                    };
    }

    node(JS attrs) => Div {
        style = "margin: auto;
                 min-height: 480px;
                 width: 640px;";

        WrappedComponent {
            component = theSlider;
            JS componentArgs() {
                dynamic {
                    return dynamic [
                        pageData = () =>
                        \iPromise.resolve(dynamic [
                            "antelope-canyon-1192648-640x480.jpg",
                            "sun-burst-1478549-640x480.jpg"
                            ]);

                        page = (dynamic opts) => vnode(page, opts, {});
                        ];
                }
            }
        }
    };
}