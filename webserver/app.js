
const http = require ("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(500);
    res.write ('Bienvenidos al server del blasloco');
    res.end();
});
server.listen(8080);
console.log ('servidor web iniciando en puerto 8080');