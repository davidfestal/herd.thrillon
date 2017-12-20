shared dynamic JS {
}

shared alias JsType => String | Integer | Float | Boolean | JsObject | JsArray;

shared class JsArray(js) 
        satisfies List<JsType> {
    JS js;

    shared actual JsType? getFromFirst(Integer index) {
        dynamic  {
            dynamic dynaJs = js;
            if (dynaJs.length < index + 1) {
                return null;
            } else {
                dynamic dynaValue = dynaJs[index];
                if (dynaValue exists) {
                    if(is String | Integer | Float | Boolean dynaValue) {
                        return dynaValue;
                    } else if(\iObject.prototype.toString.call( dynaValue ) == "[object Array]") {
                        return JsArray(dynaValue);
                    } else {
                        return JsObject(dynaValue);
                    }
                } else {
                    return null;
                }
            }
        }
    }
    
    shared actual Integer? lastIndex {
        dynamic  {
            dynamic dynaJs = js;
            if (dynaJs.length == 0) {
                return null;
            } else {
                return dynaJs.length - 1;
            }
        }
    }

    equals(Object that) => (super of List<JsType>).equals(that);
    hash => (super of List<JsType>).hash;

    shared List<JsPath> paths => this.collect(JsPath);
}

shared JsType? jsType(dynamic js) {
    dynamic {
        if (js exists) {
            if(is String | Integer | Float | Boolean js) {
                return js;
            } else if(\iObject.prototype.toString.call( js ) == "[object Array]") {
                return JsArray(js);
            } else {
                return JsObject(js);
            }
        } else {
            return null;
        }
    }
}

shared class JsObject(js) 
        satisfies Correspondence<String, JsType> & Collection<String->JsType> {
    JS js;
    
    shared actual Boolean defines(String key) {
        dynamic {
            Array<String> keys = \iObject.keys(js);
            return keys.contains(key);
        }
    }
    shared actual JsType? get(String key) {
        dynamic {
            dynamic dynaJs = js;
            if(defines(key)) {
                dynamic dynaValue = dynaJs[key];
                if (dynaValue exists) {
                    if(is String | Integer | Float | Boolean dynaValue) {
                        return dynaValue;
                    } else if(\iObject.prototype.toString.call( dynaValue ) == "[object Array]") {
                        return JsArray(dynaValue);
                    } else {
                        return JsObject(dynaValue);
                    }
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }

    shared actual String string {
        dynamic {
            dynamic dynaJS = js;
            return dynaJS.toString();
        }
    }
    shared actual Collection<String->JsType> clone() => this;

    shared actual Iterator<String->JsType> iterator() {
        dynamic {
            Array<String> keys = \iObject.keys(js);
            return keys.map((key)=> if (exists val = get(key)) then key->val else null).coalesced.iterator();
        }
    }
}

JsType voidType {
    dynamic {
        return jsType(dynamic []);
    }
}

object voidPath extends JsPath(voidType) {
    defines(String|Integer key) => false;
    get(String|Integer key) => this;
    bool => null;
    str => null;
    int => null;
    float => null;
    array => null;
    obj => null;
}

shared class JsPath satisfies Correspondence<String|Integer, JsPath> & {JsPath*} {
    
    JsType jsType;
    shared new(JsType jsType) {
        this.jsType = jsType;
    }
    shared actual default Boolean defines(String|Integer key) =>
            if (is JsObject jsType, is String key) then jsType.defines(key)
            else if (is JsArray jsType, is Integer key) then jsType.defines(key)
            else false;
    
    shared actual default JsPath get(String|Integer key) => let(val = if (is JsObject jsType, is String key) then jsType[key]
            else if (is JsArray jsType, is Integer key) then jsType[key]
            else null) if (exists val) then JsPath(val) else voidPath;
    
    shared default Boolean? bool => if (is Boolean jsType) then jsType
            else null;
    
    shared default String? str => if (is String jsType) then jsType
            else null;

    shared default Integer? int => if (is Integer jsType) then jsType
            else null;
    
    shared default Float? float => if (is Float jsType) then jsType
            else null;
    
    shared default JsArray? array => if (is JsArray jsType) then jsType
            else null;
    
    shared default JsObject? obj => if (is JsObject jsType) then jsType
            else null;

    shared {<String->JsPath>*} entries => obj?.map((key->item) => key->JsPath(item)) else {};
    shared {JsPath*} elements => array?.paths else {};

    shared actual Iterator<JsPath> iterator() => concatenate(elements, entries.map(Entry.item)).iterator();
}


void testJsObject() {
    JsType js;
    dynamic {
        js = jsType(dynamic [
            o1 = dynamic [
                s = "truc";
            ];
            i = 1;
            a = dynamic [ 
                dynamic [
                    s = "a1";
                ], 
                dynamic [
                    s = "a2";
                ], 
                dynamic [
                    s = "a3";
                ]
            ];
        ]);
    }
    if (is JsObject jsObject = js,
        is JsObject o1 = jsObject["o1"],
        is String s = o1["s"],
        is Integer i = jsObject["i"],
        is JsArray a = jsObject["a"]) {
        print(o1);
        print(s);
        print(i);
        print(a);
    }
    
    value path = JsPath(js); 
    
    print("o1.s = `` path.get("o1").get("s").str else "null" ``");
    print("i = `` path.get("i").int else "null" ``");
    print("a[0].s = `` path.get("a").get(0).get("s").str else "null" ``");
    print("a.*.s = `` path.get("a")*.get("s")*.str``");
}