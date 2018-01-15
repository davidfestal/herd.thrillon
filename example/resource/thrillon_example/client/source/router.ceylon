import ceylon.html { ... }
import herd.thrillon { Args, event, router }
import herd.thrillon.jsutils { JsObject }

object routerDemo satisfies Demo {
    late variable Button button;
    
    node(Args attrs) =>
        let (parsed = Integer.parse(JsObject(attrs)["count"]?.string else "0"),
             count = if (is Integer parsed) then parsed else 0) Button {
            attributes = [ 
                event.click((evt) {
                    dynamic {
                        console.log("route parameters =", router.parameters);
                    }
                    router.redirect("/router/:count", { "count" -> "`` count + 1 ``"});
                })
            ];
            
            "``count`` clicks"
        };
}
