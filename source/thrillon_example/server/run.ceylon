import ceylon.http.common {
    get
}
import ceylon.http.server {
    newServer,
    AsynchronousEndpoint,
    startsWith,
    equals
}
import ceylon.http.server.endpoints {
    RepositoryEndpoint,
    serveStaticFile
}
import ceylon.io {
    SocketAddress
}

"Run the module `com.acme.server`."
shared void run() {
    value modulesEp = RepositoryEndpoint("/modules");
    
    value indexHtml = AsynchronousEndpoint(
        equals("/"), 
        serveStaticFile("www", (req) => "/index.html".string),
        {get}
    );

    value js = AsynchronousEndpoint(
        startsWith("/js"), 
        serveStaticFile("js", (req) => req.path.removeInitial("/js")),
        {get}
    );
    
    value resources = AsynchronousEndpoint(
        startsWith("/modules/thrillon_example/client/1.0.1/module-resources"), 
        serveStaticFile("modules/thrillon_example/client/1.0.1/module-resources", (req) => req.path.removeInitial("/modules/thrillon_example/client/1.0.1/module-resources")),
        {get}
    );

    value nodeEp = AsynchronousEndpoint(
        startsWith("/node_modules"), 
        serveStaticFile("node_modules", (req) => req.path.removeInitial("/node_modules")),
        {get}
    );

    value server = newServer { 
        indexHtml,
        js,
        resources,
        modulesEp, 
        nodeEp
    };
    
    server.start(SocketAddress("0.0.0.0", 8081));
}