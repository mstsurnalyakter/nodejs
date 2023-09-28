const http = require('http');
const url = require('url');
const fs = require('fs');
let port = 3000;
let hostName = '127.0.0.1';

const server = http.createServer((req, res)=>{
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    fs.readFile(fileName, (error, data)=>{
        if(error){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('404 Not Found');
        }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.write("<h1>Hello World server</h1>");
          return res.end();
    })


})

server.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})