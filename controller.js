const http = require('http');
const url  = require('url');
const fx   = require('./function.js');

module.exports = http.createServer((req, res) => {
    const curl = url.parse(req.url, true);
    fx.httpFunction(curl, req, res);
});