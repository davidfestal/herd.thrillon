import ceylon.html { ... }
import herd.thrillon { Template, ... }

object buttonDemo satisfies Template {
    variable Integer count = 0;

    build(Args attrs)  => Button {
        attributes = [
            event.click((evt) {
                count ++;
            })
        ];

        "``count`` clicks"
    };
}
