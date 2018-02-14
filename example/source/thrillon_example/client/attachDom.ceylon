import ceylon.html { ... }
import herd.thrillon { Template, ... }
import ceylon.interop.browser.dom { HtmlDomElement = HTMLElement }

object attachDomDemo satisfies Template {
    late variable Button button;
    
    shared actual Node build(Args attrs)  {
        button = Button {
            attributes = [ 
                attachDom(),
                event.click((evt) {
                    value domButton = dom(button);
                    dynamic {
                        console.log("dom => ``domButton else "<null>"``");
                    }
                    if (is HtmlDomElement domButton) {
                        value style = domButton.getAttribute("style");
                        if(exists style, style == "background-color: yellow;") {
                            domButton.setAttribute("style", "background-color: blue;");
                        } else {
                            domButton.setAttribute("style", "background-color: yellow;");
                        }
                    }
                })
            ];
            
            "Change color"
        };
        return button;
    }
}
