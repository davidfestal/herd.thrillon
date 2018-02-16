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
    Node,
    Raw,
    PhrasingCategory
}
import herd.thrillon {
    lifecycle,
    Template,
    Args,
    WrappedComponent
}

import highlightjs { ... }
import ceylon.time.base {
    march
}

class DemoDescription(example, title, description, demo, initialize = noop, routes = {example}) {
    shared String example;
    shared String title;
    shared String description;
    shared Template demo;
    shared Anything() initialize;
    shared {String+} routes;
}

Content<FlowCategory> demoContent(String title, Content<PhrasingCategory> description, String sourceCode, Template demoTemplate, Args attrs) => {
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
                    WrappedComponent(demoTemplate, () => attrs)
                }
            }
        }
    }
};