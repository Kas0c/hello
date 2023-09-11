var http = require('http');

console.log("Startuje serwer...");

http.createServer(function (request, response){
    //tu jest funkcja createServer
    //request = żadanie wysłane z przeglądarki
    //response = to co wysyłamy do przeglądarki w odpowiedzi
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("JeStEm ImbryCkiem!");
    response.end();
}).listen(8080);