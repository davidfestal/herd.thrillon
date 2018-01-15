import ceylon.html { ... }
import herd.thrillon { ... }

object buttonDemo satisfies Demo {
    variable Integer count = 0;

    node(Args attrs)  => Button {
        attributes = [
            event.click((evt) {
                count ++;
            })
        ];

        "``count`` clicks"
    };
}
