import ceylon.html {
    Node
}

"""
   
   The `herd.thrillon` module contains a Mithril renderer for the
   standard HTML module of the Ceylon SDK: [`ceylon.html`](https://modules.ceylon-lang.org/repo/1/ceylon/html/1.3.3/module-doc/api/index.html).
   
   This combines the *statically-typed*, *declarative* and *functional* approach of
   `ceylon.html` with the simplicity, power, and performance of [Mithril.js](https://mithril.js.org)

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
   1. [Bi-directional bound inputs](#bound-inputs)
   1. [Routing](#routing)
   1. [Javascript utilies](#javascript-utilities)
   1. [Packaging](#packaging)
   1. [Dom access](#dom-access)
   1. [External component reuse](#component-wrappers)
   1. [Lifecycle handlers](#lifecycle-handlers)

   ------------------------------------------------------------------
   
   #### WHAT DOES IT LOOK LIKE?
   
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
   
   #### BASICS
   
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
   
   #### <a name="event"></a> EVENT HANDLERS
   
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

   #### <a name="bound-inputs"></a> 2-WAY BOUND INPUTS



   ------------------------------------------------------------------

   #### <a name="routing"></a> ROUTING



   ------------------------------------------------------------------

   #### <a name="javascript-utilities"></a> JAVASCRIPT UTILITIES



   ------------------------------------------------------------------

   #### <a name="packaging"></a> PACKAGING



   ------------------------------------------------------------------

   #### <a name="dom-access"></a> DOM ACCESS



   ------------------------------------------------------------------

   #### <a name="component-wrappers"></a> EXTERNAL COMPONENT REUSE

   
   
   ------------------------------------------------------------------
   
   #### <a name="lifecycle-handlers"></a> LIFECYCLE HANDLERS
   
   
   ------------------------------------------------------------------
   
   """
native("js")
module herd.thrillon "1.0.1" {
    shared import ceylon.html "1.3.3";
    shared import ceylon.interop.browser "1.3.3";
    import npm:"mithril" "1.1.3";
}
