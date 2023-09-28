const http = require('http')
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    return res.end('hello wordl')
})

server.listen(port,hostName,()=>{
    console.log(`server is running at http://${hostName}:${port}`);
})