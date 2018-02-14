import ceylon.html { Div, Node }
import mithril.slider { slider }
import herd.thrillon { Template, ... }
import herd.thrillon.jsutils { JS, JsPath, JsObject }

object externalDemo satisfies Template {
    Component theSlider;
    dynamic {
        theSlider = slider;
    }

    object page satisfies Template {
        build(Args attrs) =>
            let (opts = JsPath(JsObject(attrs)))
            if (exists imageFile = opts.get("data").str,
                exists url = `module`.resourceByPath("images/``imageFile``")?.uri)
            then
            Div {
                style = "height: 480px;
                         width: 640px;
                         top: 0;
                         float: left;
                         background-image: url(``url``);";
            } else Div {
                "No image"
            };
    }

    build(Args attrs) => Div {
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