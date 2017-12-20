import ceylon.interop.browser.dom {
    DomElement=Element
}
import ceylon.html {
    AttributeEntry,
    AttributeValueProvider
}
import herd.thrillon.internal {
    VoidAttributeValueProvider,
    MultiAttributeValueProvider
}

shared dynamic RouteResolver {
    shared formal Component? onmatch(JS args, String requestedPath);
    shared formal Array<VNode>|VNode render(VNode vnode);
}

shared object router {
    shared void init(DomElement root, String defaultRoute, {<String -> <Component|RouteResolver>> +} routes) {
        dynamic {
            dynamic dynaRoutes = dynamic [];
            for (path->route in routes) {
                \iObject.defineProperty(
                    dynaRoutes, 
                    path,
                    dynamic [
                        writable = false;
                        enumerable = true;
                        configurable = false;
                        \ivalue = route;
                    ]);
            }
            m.route(root, defaultRoute, dynaRoutes);
        }
    }
    
    shared void prefix(String prefix) {
        dynamic {
            m.route.prefix(prefix);
        }
    }
    
    shared String lastRoutingPath {
        dynamic {
            return m.route.get();
        }
    }

    shared String? parameter(String name) {
        dynamic {
            return m.route.param(name);
        }
    }
    
    shared JS parameters {
        dynamic {
            return m.route.param();
        }
    }
    
    shared AttributeEntry link(Boolean isStaticLink = false) {
        AttributeValueProvider provider;
        dynamic {
            provider = VoidAttributeValueProvider(m.route.link);
        }
        return "link" -> MultiAttributeValueProvider {
            "oncreate" -> provider,
            if(!isStaticLink) "onupdate" -> provider
        };
    }
    
    shared void redirect(String url, {<String->String>*} routeParameters, Boolean replace = false, JS? state = null, String? title = null) {
        dynamic {
            dynamic dynaParams = dynamic [];
            for (name->val in routeParameters) {
                \iObject.defineProperty(
                    dynaParams, 
                    name,
                    dynamic [
                    writable = false;
                    enumerable = true;
                    configurable = false;
                    \ivalue = val;
                    ]);
                }
            
            dynamic options = dynamic [];
            for (name->val in {"replace"->replace, "state"->state, "title"->title}) {
                if(exists val) {
                    \iObject.defineProperty(
                        options, 
                        name,
                        dynamic [
                        writable = true;
                        enumerable = true;
                        configurable = true;
                        \ivalue = val;
                        ]);
                    }
                }
            m.route.set(url, dynaParams, options);
        }
    }
}