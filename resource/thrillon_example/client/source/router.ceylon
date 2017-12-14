import ceylon.html { ... }
import herd.thrillon { ... }
import ceylon.interop.browser.dom { HtmlDomElement=HTMLElement }

object routerDemo satisfies Demo {
    variable Integer count = 0;
    late variable Button button;
    
    shared actual FlowCategory&Node node(JS attrs)  {
        value parsed = Integer.parse(JsPath(JsObject(attrs))["count"]?.str else "0");
        variable value count = if (is Integer parsed) then parsed else 0;
        button = Button {
            attributes = [ 
                event.click((evt) {
                    dynamic {
                        console.log("route parameters =", router.parameters);
                    }
                    count ++;
                    router.redirect("/router/:count", { "count" -> "`` count ``"});
                })
            ];
            
            "``count`` clicks"
        };    
        return button;
    }
}
