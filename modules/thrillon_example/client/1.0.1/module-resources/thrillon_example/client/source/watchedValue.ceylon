import ceylon.time { Time, now }
import herd.thrillon { Template, Args, ExistingWatchedValue}
import ceylon.interop.browser { window }
import ceylon.html { H3 }

object watchedValueDemo satisfies Template {
    value currentTime = ExistingWatchedValue<Time>(now().time()) ;
    
    shared void initialize() {
        window.setInterval(() {
            currentTime.set(now().time());
        }, 300);
    }
    
    build(Args attrs) =>
        H3 { clazz = "text-center";
            "Time is : ``
            let (timeStr = currentTime.get().string)
            timeStr.substring(0, timeStr.size - 4)``"
        };
}