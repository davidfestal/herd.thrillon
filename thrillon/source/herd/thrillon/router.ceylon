import ceylon.interop.browser.dom {
    DomElement=Element
}
import ceylon.html {
    AttributeEntry,
    AttributeValueProvider,
    Node,
    A
}
import herd.thrillon.internal {
    VoidAttributeValueProvider,
    MultiAttributeValueProvider
}
import herd.thrillon.jsutils {
    ...
}

"""
   Wrapper around the Mithril [RouteResolver](https://mithril.js.org/route.html#routeresolver)
   """
shared dynamic RouteResolver {
    shared formal Component? onmatch(JS args, String requestedPath);
    shared formal Array<VNode>|VNode render(VNode vnode);
}


"""
   Wrapper around the Mithril [`m.route`](https://mithril.js.org/route.html) methods
   """
shared interface Router {

    "Wrapper around the Mithril [`m.route`](https://mithril.js.org/route.html#description) method"
    shared formal void init(DomElement root, String defaultRoute, {<String -> <Component|RouteResolver>> +} routes);

    "Wrapper around the Mithril [`m.route.prefix`](https://mithril.js.org/route.html#mrouteprefix) method"
    shared formal void prefix(String prefix);

    "Wrapper around the Mithril [`m.route.get`](https://mithril.js.org/route.html#mrouteget) method"
    shared formal String lastRoutingPath;

    "Wrapper around the Mithril [`m.route.param`](https://mithril.js.org/route.html#mrouteparam) method
     with a parameter"
    shared formal String? parameter(String name);

    "Wrapper around the Mithril [`m.route.param`](https://mithril.js.org/route.html#mrouteparam) method
     without any parameters"
    shared formal JS parameters;

    "Wrapper around the Mithril [`m.route.link`](https://mithril.js.org/route.html#mroutelink) method.
     This returns an [[AttributeEntry]] that should be added to the [[attributes|Node.attributes]] of the
     Html [[Anchor|A]] node"
    shared formal AttributeEntry link(Boolean isStaticLink = false);

    "Wrapper around the Mithril [`m.route.set`](https://mithril.js.org/route.html#mrouteset) method"
    shared formal void redirect(String url, {<String->String>*} routeParameters, Boolean replace = false, JS? state = null, String? title = null);
}

shared Router router = object satisfies Router {
    shared actual void init(DomElement root, String defaultRoute, {<String -> <Component|RouteResolver>> +} routes) {
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
    
    shared actual void prefix(String prefix) {
        dynamic {
            m.route.prefix(prefix);
        }
    }
    
    shared actual String lastRoutingPath {
        dynamic {
            return m.route.get();
        }
    }

    shared actual String? parameter(String name) {
        dynamic {
            return m.route.param(name);
        }
    }
    
    shared actual JS parameters {
        dynamic {
            return m.route.param();
        }
    }
    
    shared actual AttributeEntry link(Boolean isStaticLink) {
        AttributeValueProvider provider;
        dynamic {
            provider = VoidAttributeValueProvider(m.route.link);
        }
        return "link" -> MultiAttributeValueProvider {
            "oncreate" -> provider,
            if(!isStaticLink) "onupdate" -> provider
        };
    }
    
    shared actual void redirect(String url, {<String->String>*} routeParameters, Boolean replace, JS? state, String? title) {
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
};