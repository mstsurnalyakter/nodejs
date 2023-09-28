console.log(__dirname);
console.log(__filename);

const path = require('path');

// console.log(path);

// const extentionName = path.extname("index.html");
// console.log(extentionName);

const joinName = path.join(__dirname + '/viesw')
const joinName2 = path.join(__dirname + '/../viesw')
console.log(joinName);
console.log(joinName2);