const http = require('http')
const fs = require('fs');

fs.appendFile('./text.txt', 'hello text file', error =>{
    if(error) throw error;
    console.log('Save!');
})


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello world');
    return res.end();
})