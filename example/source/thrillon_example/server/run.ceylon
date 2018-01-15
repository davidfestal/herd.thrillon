import ceylon.http.common {
    get
}
import ceylon.http.server {
    newServer,
    AsynchronousEndpoint,
    startsWith,
    equals,
    isRoot
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

    value index = AsynchronousEndpoint(
        isRoot(),
        serveStaticFile(".", (req) => "/index.html"),
        {get}
    );

    value rootFiles = AsynchronousEndpoint(
        equals("/index.html").or( equals("/require.js")),
        serveStaticFile("."),
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
        index,
        rootFiles,
        resources,
        modulesEp, 
        nodeEp
    };
    
    server.start(SocketAddress("0.0.0.0", 8080));
}