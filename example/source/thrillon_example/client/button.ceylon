import ceylon.html { ... }
import herd.thrillon { ... }
import ceylon.interop.browser.dom { HtmlDomElement=HTMLElement }

object buttonDemo satisfies Demo {
    variable Integer count = 0;

    shared actual FlowCategory&Node node(JS attrs)  => Button {
            attributes = [
                event.click((evt) {
                    count ++;
                })
            ];

            "``count`` clicks"
        };
}
