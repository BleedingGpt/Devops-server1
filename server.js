const http = require("http");
const Port = 8000;

const server = http.createServer((req, res) => {
res.writeHead(200,{"content-type":"text/plain"});
res.end("hello from devops and upgraded feels automated");
});

server.listen(Port,()=>{
    console.log(`listening on port ${Port}`);
});