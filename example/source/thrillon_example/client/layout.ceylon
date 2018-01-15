import ceylon.html {
    Nav,
    Span,
    Body,
    I,
    Div,
    A,
    Content,
    FlowCategory,
    Strong,
    Button,
    ButtonType,
    H1,
    P,
    Br,
    Raw,
    H4,
    Ul,
    Li
}

import herd.thrillon {
    router
}

Body layout({DemoDescription*} demos)(Content<FlowCategory> contents) => Body {
        Div { clazz = "container";
            Nav { clazz="navbar navbar-expand-sm navbar-dark bg-primary";
                Button { clazz = "navbar-toggler";
                    type = ButtonType.button;
                    attributes = [
                    "data-toggle" -> "collapse",
                    "data-target" -> "#navbarNavAltMarkup",
                    "aria-controls" -> "navbarNavAltMarkup",
                    "aria-expanded" -> "false",
                    "aria-label" -> "Toggle navigation"
                    ];
                    Span { clazz = "navbar-toggler-icon"; }
                },
                Div { clazz = "collapse navbar-collapse";
                    id = "navbarNavAltMarkup";
                    Ul { clazz="navbar-nav mr-auto mt-2 mt-lg-0";
                        Li { clazz = "nav-item";
                            A { clazz="nav-link";
                                href="/";
                                attributes = [ router.link(true) ];
                                "Home",
                                Span { clazz = "sr-only";
                                    "(current)"
                                }
                            }
                        },
                        for (demo in demos)
                        Li { clazz = "nav-item";
                            A { clazz="nav-link";
                                href="/`` demo.example ``";
                                attributes = [ router.link(true) ];
                                demo.title
                            }
                        }
                    }
                }
            },
            Div { clazz = "jumbotron";
                Div { clazz = "container";
                    H1 {
                        style = "text-align: center";
                        Strong { clazz = "text-primary"; "Thril" }, "ling web development with Cey", Strong { clazz = "text-primary"; "lon" } 
                    },
                    Br {},
                    H4 {
                        clazz = "text-muted";
                        style="text-align: center";

                        "With ", Strong { "Thrillon" }
                    },
                    H4 {
                        clazz = "text-muted";
                        style="text-align: right";

                        "Easily mix ", Strong { "Mithril" }, " and ", Strong { "Ceylon Html DSL" }
                    },
                    H4 {
                        clazz = "text-muted";
                        style="text-align: left";

                        "And enjoy " , I { Strong { "declarative" }}, ", " , I { Strong { "composable" }}, " and " , I { Strong { "typesafe" }}, " web development"
                    },
                    Br {},
                    P {
                        A { clazz = "btn btn-primary btn-lg";
                            href = "https://github.com/davidfestal/herd.thrillon";
                            attributes = [ "role" -> "button" ];
                            "Go to GitHub ", Raw("&raquo;")
                        },
                        " ",
                        A { clazz = "btn btn-primary btn-lg";
                            href = "https://modules.ceylon-lang.org/repo/1/herd/thrillon/`` `module`.version ``/module-doc/api/index.html";
                            attributes = [ "role" -> "button" ];
                            "Ceylon documentation ", Raw("&raquo;")
                        }
                    }
                }
            },
            Div { clazz="container";
                contents
            }
        }
	};