const http = require('http')

let port = 3000;
let hostName = '127.0.0.1';

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h1>hello server</h1>");
    res.write("<h2>hello server</h2>");
    return res.end();
})

server.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})