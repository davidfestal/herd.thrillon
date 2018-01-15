import ceylon.html {
    Node,
    Code,
    AttributeEntry
}

import ceylon.interop.browser.dom {
    DomNode = Node
}
import herd.thrillon.jsutils {
    ...
}

"""
   
   The `herd.thrillon` module contains a Mithril renderer for the
   standard HTML module of the Ceylon SDK: [`ceylon.html`](https://modules.ceylon-lang.org/repo/1/ceylon/html/1.3.3/module-doc/api/index.html).
   
   This combines the *__statically-typed__*, *__declarative__* and *__functional__* approach of
   `ceylon.html` with the *__simplicity__*, *__power__*, and *__performance__* of
   [Mithril.js](https://mithril.js.org)

   Instead of having a `ceylon.html` node rendered directly to a string and assigned to the content
   of a dom node, it allows rendering a `ceylon.html` node as a Mithril component that can be directly
   mounted at a given location in the HTML page DOM tree.
   
   This means, in particular, that you can attach Ceylon functions as event handlers
   directly while defining your HTML.
   
   ------------------------------------------------------------------
   
   #### CONTENT
   
   1. [What does it look like?](#what-does-it-look-like)
   1. [Basics](#basics)
   1. [Event handlers](#events)
   1. [Watched values](#watched-values)
   1. [Bi-directional bound values](#bi-directional-bound-values)
   1. [Routing](#routing)
   1. [Javascript utilies](#javascript-utilities)
   1. [Packaging](#packaging)
   1. [Dom access](#dom-access)
   1. [External component reuse](#external-component-reuse)
   1. [Lifecycle handlers](#lifecycle-handlers)

   ------------------------------------------------------------------
   
   #### <a name="what-does-it-look-like"></a> WHAT DOES IT LOOK LIKE?
   
   A quick preview shows code example, which mounts a Ceylon HTML Mithril template to
   the DOM document root:
   
   ```
        shared void run() {
            assert (exists root = document.body);
            mount {
                parent = root;
                
                object component satisfies Template {
                    variable value count = 0;
                    build() =>
                        Main {
                            Div {
                                H1 {
                                    "Thrillon: Mix Mithril and Ceylon Html DSL !"
                                },
                                Button {
                                    attributes = [ 
                                        event.click((evt) { 
                                            count ++; 
                                        })
                                    ];
                                    
                                    "``count`` clicks"
                                }                    
                            }
                        };
                }
            };
        }
      ```
   
   Calling this `run()` method from the main HTML page is all you have to do
   to have the button react to click events and increment the 
   displayed click counter.
   
   ------------------------------------------------------------------
   
   #### <a name="basics"></a> BASICS
   
   The module defines bindings for some of the main Mithril API calls and structures:
   - the [[Component]] interface,
   - the [[VNode]] interface,
   - the [[vnode]] hyperscript function,
   - the [[mount]] function,
   
   and a new type of Mithril component based on the `ceylon.html` module:
   
   - the [[Template]] interface.
   
   To create a new Mithril component, simply implement the [[Template.build|Template.build]] method
   to return a [[ceylon.html|module ceylon.html]] [[Node]] element.
   
   This `ceylon.html`-based Mithril component can then be attached to any Dom element
   in the DOM tree with the [[mount|mount]] function.
   

   ------------------------------------------------------------------
   
   #### <a name="event-handlers"></a> EVENT HANDLERS
   
   The [[event]] object allows adding Ceylon functions as event handlers
   in the [[attributes|ceylon.html::Node.attributes]] of a
   [[ceylon.html|module ceylon.html]] [[node|ceylon.html::Node]].
   
   ```
        Button {
            attributes = [ 
                event.click((evt) { 
                    // Ceylon code
                    // 'evt' is a ceylon.interop.browser.dom::Event
                })
            ];
            
            "Button Text"
        }                    
   
   ```   

   More information is given on the [[documentation|event]].
   
   ------------------------------------------------------------------
   
   #### <a name="watched-values"></a> WATCHED VALUES

   The [[WatchedValue]] class provides a way to automatically
   trigger an incremental redraw of the HTML DOM tree each time
   a value is changed.

   More information is given on the [[documentation|WatchedValue]].
   
   ------------------------------------------------------------------

   #### <a name="bi-directional-bound-values"></a> BI-DIRECTIONAL BOUND VALUES

   A [[BoundValue]] provides a way to associate a value
   with an Html node, and bidirectionally bind it to a propety
   of the html node.

   More information is given on the [[documentation|BoundValue]].

   ------------------------------------------------------------------

   #### <a name="routing"></a> ROUTING

   [Mithril routing](https://mithril.js.org/#routing) is provided by
   the [[router]] object which satisfies the [[Router]] interface.

   ------------------------------------------------------------------

   #### <a name="javascript-utilities"></a> JAVASCRIPT UTILITIES

   In a number of use-cases, we have to manage raw javascript objects:
   for parameters of the [[Template.build]] method, or the route parameters
   of the [[Router.redirect]] method for example.

   In order to make the use of these row Javascript objects in a
   *pseudo-typesafe* way, such values are declared as the [[JS]] type.

   Then a [[JsObject]] can be instanciated with the [[JS]] value, in order
   to retrieve properties by using native Ceylon correspondence syntax:

   ```
       value jsObject = JsObject(js);
       JsType? prop = jsObject["propName"];
   ```

   The same can be done with the [[JsArray]].

   And [[JsType]] is either a simple value [[String]], [[Boolean]], etc...
   or a [[JsObject]] or a [[JsArray]]

   Any arbitrary `dynamic` Javascript value can be converted to a
   [[JsType]] by the [[jsType]] function.

   In the case of complex, deep, Javascript objects, the [[JsPath]]
   class allows pointing directly to an expected value in the Javascript
   object tree structure like this:

   ```
       value jsPath = JsPath(complexJavascriptObject);

       // get a[0].s
       String? sInFirstA = path.get("a").get(0).get("s").str;

       // get a.*.s
       {String*} sInAllAs = path.get("a")*.get("s")*.str;
   ```

   ------------------------------------------------------------------

   #### <a name="packaging"></a> PACKAGING

   A Thrillon application is packaged by using [requireJS](http://requirejs.org/)

   Minimal `RequireJs` code to bootstrap a *thrillon_application* module
   would be like that:

   ```javascript

    require.config({
        baseUrl : 'modules/',
        paths: {
            // Define where the real Javascript file is available for the Mithril/1.1.6 NPM
            // module, related to the requireJS `baseUrl`
            // When running from your development environment, the NPM module already has
            // been downloaded into `../node_modules` when compiling the Ceylon application.

            'mithril/1.1.6/mithril-1.1.6': '/../node_modules/mithril/mithril.min'
        }
    });

    require([ 'thrillon_application/1.0.0/thrillon_application-1.0.0'], function(example) {
        example.run();
    });

   ```

   ------------------------------------------------------------------

   #### <a name="dom-access"></a> DOM ACCESS

   In some use-cases, it might be useful, from event-handlers, to
   have access to the underlying [[DOM node|DomNode]] corresponding
   to a given Html [[Node]].

   ###### Example

   ```
    button = Button {
        attributes = [
            attachDom(),
            event.click((evt) {
                value domButton = dom(button);
                if (is HtmlDomElement domButton) {
                    value style = domButton.getAttribute("style");
                    if(exists style, style == "background-color: yellow;") {
                        domButton.setAttribute("style", "background-color: blue;");
                    } else {
                        domButton.setAttribute("style", "background-color: yellow;");
                    }
                }
            })
        ];

        "Change color"
    };
    return button;

   ```

   The [[attachDom]] function is called as part of the Html [[Node.attributes]].
   Then the DOM node associated to the `button` Html [[Node]] through
   the [[dom]] function.

   ------------------------------------------------------------------

   #### <a name="external-component-reuse"></a> EXTERNAL COMPONENT REUSE

   Thrillon allows reusing external
   [Mithril components](https://mithril.js.org/components.html)
   by simply inserting a [[WrappedComponent]] inside the `ceylon.html`
   tree-like structure.

   ------------------------------------------------------------------

   #### <a name="lifecycle-handlers"></a> LIFECYCLE HANDLERS

   The [[lifecycle]] top-level object provides wrapper methods for each
   [Mithril lifecycle event](https://mithril.js.org/components.html#lifecycle-methods).

   Every wrapper method produces an [[AttributeEntry]] from the corresponding
   event handler implemented as a Ceylon function type.

   ###### How to use it

   It is used when creating the `ceylon.html` tree that will be rendered
   by a [[Template]]. Event Handlers can thus be added in the
   [[Node.attributes]] parameter of the Html Node.

   ###### Example

   ```
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
   ```

   In this example, the [highlight.js](https://highlightjs.org/) highlighting
   is applied to the content of the [[Code]] Html node, each time the
   corresponding Dom node is created.

   ------------------------------------------------------------------

   """
native("js")
module herd.thrillon npm:"herd.thrillon" "1.0.1" {
    shared import ceylon.html "1.3.3";
    shared import ceylon.interop.browser "1.3.3";
    import npm:"mithril" "1.1.6";
}
