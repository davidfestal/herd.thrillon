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
    Li,
    Img,
    H5,
    H2
}

import herd.thrillon {
    lifecycle, router
}

Body layout({DemoDescription*} demos)(Content<FlowCategory> contents) => Body {
        Div { clazz = "container";
            Nav { clazz="navbar navbar-dark bg-primary";
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
                H5 { clazz = "navbar-text";
                    Strong { Span { clazz = "text-secondary"; "Thrillon : Thril" }, "ling web development with Cey", Span { clazz = "text-secondary"; "lon" }, " - ", "Demo Application" }
                },
                Span { clazz = "navbar-text";
                    A { clazz = "icon";
                        href = "https://github.com/davidfestal/herd.thrillon/tree/master/example";
                        attributes = [ "role" -> "button" ];
                        Img { height = 32;
                            src = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg";
                            title = "Open in GitHub";
                            alt = "Open in GitHub";
                        }
                    },
                    A { clazz = "icon";
                        href = "https://modules.ceylon-lang.org/repo/1/herd/thrillon/`` `module`.version ``/module-doc/api/index.html";
                        attributes = [ "role" -> "button" ];
                        Img { height = 32;
                            src = "http://design.jboss.org/ceylon/logo/final_ceylonherd/ceylonherd_logomark.svg";
                            title = "Open Documentation in Ceylon Herd";
                            alt = "Open Documentation in Ceylon Herd";
                        }
                    }
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
                    H2 {
                        style = "text-align: center";
                        Strong { clazz = "text-primary"; "Thril" }, "ling web development with Cey", Strong { clazz = "text-primary"; "lon" } 
                    },
                    Br {},
                    H4 {
                        clazz = "text-muted";
                        style="text-align: center";

                        "With ", Strong { "Thrillon" },
                        Br {},
                        "Easily mix ", Strong { "Mithril" }, " and ", Strong { "Ceylon Html DSL" },
                        Br {},
                        "And enjoy " , I { Strong { "declarative" }}, ", " , I { Strong { "composable" }}, " and " , I { Strong { "typesafe" }}, " web development"
                    }
                }
            },
            Div { clazz="container";
                contents
            }
        }
	};