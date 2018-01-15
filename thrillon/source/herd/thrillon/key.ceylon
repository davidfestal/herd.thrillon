import ceylon.html {
	AttributeEntry
}

"""
   Helper object to provide the Mithril [key](https://mithril.js.org/keys.html)
   feature.

   #### Key provided from an already-known value

   ```
    List<String> list;
    ...
    Table {
        TBody {
            for (i->item in list.indexed)
            Tr {
                attributes = [ key.set(i.string) ];
                item
            }
        }
    };
   ```

   #### Key provided as a function

   ```
    class Person(shared String firstName, shared String lastName) {
        shared String key() => "``firstName`` $$ ``lastName``";
    }
    Set<Person> persons = nothing;

    Table {
        TBody {
            for (person in persons)
            Tr {
                attributes = [ key.build(person.key) ];
            }
        }
    };
   ```
   """
shared object key {
    shared String attributeName = "key";
    shared AttributeEntry build(String builder()) => attributeName -> builder();
    shared AttributeEntry set(String keyValue) => attributeName -> keyValue;
}
