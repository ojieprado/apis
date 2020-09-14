const service = require('./service.js');

exports.httpFunction = (curl, req, res) => {
    if (curl.pathname == '/sample' && req.method === 'GET') {
        console.log(`Request Type:${req.method} Endpoint: ${curl.pathname}`);
        service.sampleRequest(req, res);

        // POST Endpoint
    } else if (curl.pathname == '/test' && req.method === 'POST') {
        console.log(`Request Type:${req.method} Endpoint: ${curl.pathname}`);
        service.testRequest(req, res);

        // Error Handler    
    } else {
        console.log(`Request Type:${req.method} Invalid Endpoint: ${curl.pathname}`);
        service.invalidRequest(req, res);
    }
}
