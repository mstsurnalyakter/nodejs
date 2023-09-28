const http = require('http')
const fs = require('fs');


fs.open('text2.txt', 'w', error=>{
    if(error) throw error;
    console.log('save');
})

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hello open file method');
    return res.end()
}).listen(8000)