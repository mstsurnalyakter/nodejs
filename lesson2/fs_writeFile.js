const http = require('http')
const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hello write file method');
    return res.end();
}).listen(8000)