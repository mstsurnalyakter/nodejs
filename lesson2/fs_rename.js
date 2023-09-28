const http = require('http')
const fs = require('fs');

fs.rename('./name.txt', './rename.txt', error =>{
    if(error) throw error;
    console.log('file name is rename successfully');
})


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hello rename file');
    return res.end();
}).listen(8000)