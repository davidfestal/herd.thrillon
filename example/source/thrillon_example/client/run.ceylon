import ceylon.html {
    Raw
}
import ceylon.interop.browser {
    newXMLHttpRequest,
    window
}
import ceylon.interop.browser.dom {
    document
}

import herd.thrillon {
    Template,
    Args,
    router
}

"Run the module `herd.thrillon`."
shared void mountApplication() {
  assert (exists root = document.body);

  value demos = {
      DemoDescription(
          "button",
          "Automatic DOM update on events",
          "Simple Ceylon value (count) is incremented on button click is directly updated in the HTML string template.",
          buttonDemo),
      DemoDescription(
        "watchedValue",
        "Watched value",
        "Current time is updated by a Javascript timeout, and the displayed text is updated automatically.",
        watchedValueDemo,
      watchedValueDemo.initialize),
      DemoDescription(
          "list",
          "Bidirectional input bindings",
          "List automatically updated through a Ceylon comprehension.",
          listDemo),
      DemoDescription(
          "attachDom",
          "Dom access",
          "Access to the underlying Dom element associated to a Html node.",
          attachDomDemo),
      DemoDescription(
          "router",
          "Routing",
          "Routing example.",
          routerDemo,
          noop,
          {"router","router/:count"}),
      DemoDescription(
          "external",
          "External Mithril component reuse",
          "Embed the 'mithril-slider' external component.",
          externalDemo)
  };

  String markdown;
  dynamic {
      markdown = marked(
          `module herd.thrillon`.annotations<DocAnnotation>().map((annot) => annot.description).first else ""); 
  }

  object homePage satisfies Template {
      build(Args attrs) => layout(demos)(Raw(markdown));
  }

  function getSourceCode(String example) {
      if(exists url = `module`.resourceByPath("source/`` example ``.ceylon")?.uri) {
          if (window.location.string.startsWith("file:")) {
              return "";
          } else {
              dynamic { console.log(url); }
              value req = newXMLHttpRequest();
              req.open("GET", url, false);
              req.send();
              dynamic { console.log(req.statusText); }
              return req.responseText;
          }
      } else {
          return "";
      }
  }
  
  function buildTemplate({DemoDescription*} demos, DemoDescription demo) {
      demo.initialize();
      return {
          for (route in demo.routes)
          "/`` route ``" -> object satisfies Template {
              value sourceCode = getSourceCode(demo.example);
              build(Args attrs) => compose(layout(demos), demoContent)(
                  demo.title,
                  demo.description,
                  sourceCode,
                  demo.demo,
                  attrs);
          }
      };
  }

  router.init(root, "/", {
    "/" -> homePage,
    for (demo in demos)
    for (routedTemplate in buildTemplate(demos,demo))
    routedTemplate
  });
}
