const os = require('os');


console.log(os.platform());;
console.log(os.arch());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());

// const {totalmem, freemem} = require('os')
// console.log(totalmem());
// console.log(freemem());