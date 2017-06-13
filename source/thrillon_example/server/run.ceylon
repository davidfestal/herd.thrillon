import ceylon.http.server.endpoints {
    RepositoryEndpoint,
    serveStaticFile
}
import ceylon.http.server {
    newServer,
    AsynchronousEndpoint,
    startsWith
}
import ceylon.http.common {
    get
}

"Run the module `com.acme.server`."
shared void run() {
    value modulesEp = RepositoryEndpoint("/modules");
    
    value nodeModulesEp = AsynchronousEndpoint(
        startsWith("/node_modules"),
        serveStaticFile("."),
        {get}
    );
    
    value staticEp = AsynchronousEndpoint(
        startsWith("/"), 
        serveStaticFile("www", (req) => req.path == "/" then "/index.html" else req.path),
        {get}
    );

    value server = newServer { 
        modulesEp, 
        nodeModulesEp,
        staticEp };
    
    server.start();
}