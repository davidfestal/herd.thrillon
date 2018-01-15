import ceylon.html {
    Content,
    H3,
    FlowCategory,
    Div,
    Code,
    P,
    H5,
    A,
    Pre,
    Node
}
import herd.thrillon {
    lifecycle,
    Args
}

import highlightjs { ... }

class DemoDescription(example, title, description, demo, routes = {example}) {
    shared String example;
    shared String title;
    shared String description;
    shared Demo demo;
    shared {String+} routes;
}

interface Demo {
    shared default void initialize() => noop();
    shared formal FlowCategory&Node node(Args attrs);
}

Content<FlowCategory> demoContent(String title, String description, String sourceCode, Content<FlowCategory> contents) =>  { 
	H3 { 
		title
    },
    P {
        description
    },
    Div { 
        id="accordion";
        attributes = [ "role" -> "tablist"];
        Div { clazz = "card";
            Div { clazz = "card-header";
                id = "sourceCodeHeader";
                attributes = [ "role" -> "tab"];
                H5 { clazz = "mb-0";
                    A {
                        href = "#sourceCode";
                        attributes = [
                            "data-toggle" -> "collapse",
                            "aria-expanded" -> "true",
                            "aria-controls" -> "sourceCode"
                        ];
                        "Source code"
                    }
                }
            },
            Div { clazz = "collapse";
                id = "sourceCode";
                attributes = [ 
                    "role" -> "tabpanel",
                    "aria-labelledby" -> "sourceCodeHeader",
                    "data-parent" -> "#accordion"
                ];
                
                Div { clazz = "card-body";
                    Pre {
                        Code { clazz = "ceylon";
                            attributes = [
                                lifecycle.create((vnode) {
                                    dynamic {
                                        hljs.highlightBlock(vnode.dom);
                                    }                                    
                                })
                            ];
                            sourceCode
                        }
                    }
                    
                }
            }
        },
        Div { clazz = "card";
            Div { clazz = "card-header";
                id = "resultHeader";
                attributes = [ "role" -> "tab"];
                H5 { clazz = "mb-0";
                    A {
                        href = "#result";
                        attributes = [
                        "data-toggle" -> "collapse",
                        "aria-expanded" -> "true",
                        "aria-controls" -> "result"
                        ];
                        "Result"
                    }
                }
            },
            Div { clazz = "collapse show";
                id = "result";
                attributes = [ 
                "role" -> "tabpanel",
                "aria-labelledby" -> "resultHeader",
                "data-parent" -> "#accordion"
                ];
                
                Div { clazz = "card-body";
                    contents
                }
            }
        }
    }
};