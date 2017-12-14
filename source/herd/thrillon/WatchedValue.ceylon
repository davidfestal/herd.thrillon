"""
   A [[WatchedValue]] allows defining values that will trigger a
   Mithril *redraw* event (and finally a DOM update) whenever
   it is changed.
   
   ### How it works
   
   If you have such a watched value:
   
   ```
   WatchedValue<Time> theTime = WatchedValue<Time>(null) ;
   ```
   
   And this code inside a [[Template]]:
   
   ```
      Label {
        "Time is : ``theTime.val else ""``"
      }
   ```
   
   Then, in any place in your Ceylon code, if you set the time value with
   the following code:
   
   ```
      theTime.val = now().time();
   ```
   
   This will update the content of the HTML label defined above.
   
   ### More details
   
   - There is a variant named [[ExistingWatchedValue]] that can be used
   when the value is known from the begining, and cannot be [[null]].
   
   - If the watched value is a list for example, you may want to
   call an operation on this list to change it. For this you can use the 
   [[change|WatchedValue.change]] method like this:
   
   ```
   value watchedList = ExistingWatchedValue<List<String>(ArrayList<String>());
   ...
   watchedList.change((l) => l.add("aString");
   ```
   
   - You can use the optional [[onChange|WatchedValue.onChange]] parameter to
   add some other action to be done *after* the value is changed,
   and *before* DOM redraw operation is triggered.
   
   - If you need to set the value *without* triggering a DOM redraw (inside
   an event handler for example), just use the [[setQuietly|WatchedValue.setQuietly]] method.
   
   """
shared class WatchedValue<T, Exists=Null>(T|Exists initialValue, void onChange() => noop()) 
        given T satisfies Object
        given Exists satisfies Null {
    
    variable T|Exists v = initialValue;
    
    shared T|Exists val => get();
    assign val {
        set(val
        );
    }
    
    shared void setQuietly(T|Exists val) {
        this.v = val;
    }
    
    shared void set(T|Exists val) {
        this.v = val;
        onChange();
        dynamic {
            m.redraw();
        }
    }
    
    shared void change(Anything action(T|Exists val) ) {
        action(v);
        onChange();
        dynamic {
            m.redraw();
        }
    }
    
    shared T|Exists get() {
        return v;
    }
    
    string => v?.string else "";
}

shared class ExistingWatchedValue<T>(T initialValue, void onChange() => noop())
        extends WatchedValue<T, Nothing>(initialValue, onChange)
        given T satisfies Object {}


