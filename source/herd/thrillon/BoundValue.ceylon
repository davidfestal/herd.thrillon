shared class BoundValue<T, Exists=Null>(val, void onChange() => noop()) 
        given Exists satisfies Null {
    
    variable T|Exists val;
    
    shared void setQuiet(T|Exists val) {
        this.val = val;
    }
    
    shared void set(T|Exists val) {
        this.val = val;
        onChange();
        dynamic {
            m.redraw();
        }
    }
    
    shared void change(Anything(T|Exists) action) {
        action(val);
        onChange();
        dynamic {
            m.redraw();
        }
    }
    
    shared T? get() {
        return val;
    }
}