const http = require('http')
const fs = require('fs');

fs.unlink('./unlink.txt', err =>{
    if(err) throw err;
    console.log('file is unlink');
})

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hello unlink file');
    return res.end()
}).listen(8000);