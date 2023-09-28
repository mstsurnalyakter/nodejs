const url = require('url');

const adr = 'http://www.google.com/index.js?year=2020&month=3&day=2';

const q = url.parse(adr, true);

console.log(q.host);
console.log(q.path);
console.log(q.pathname);
console.log(q.query);
console.log(q.hostname);
console.log(q.href);
console.log(q.query.month);
