import ceylon.time { Time, now }
import herd.thrillon { ExistingWatchedValue,
    JS }
import ceylon.interop.browser { window }
import ceylon.html { H3 }

object watchedValueDemo satisfies Demo {
    value currentTime = ExistingWatchedValue<Time>(now().time()) ;
    
    shared actual void initialize() {
        window.setInterval(() {
            currentTime.set(now().time());
        }, 300);
    }
    
    node(JS attrs) =>  H3 { clazz = "text-center";
        "Time is : ``
        let (timeStr = currentTime.get().string) 
        timeStr.substring(0, timeStr.size - 4)``"
    };
}