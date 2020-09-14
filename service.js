const url = require('url');

//
exports.sampleRequest = (req, res) => {
    const curl = url.parse(req.url, true);
    let name = '';
    if (curl.query.name) {
        name = curl.query.name
    }
    let jsonResponse = {
        "text": "Hello " + name
    };
        res.statusCode = 200;
        res.setHeader('User-Agent', 'Dummy-A');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(jsonResponse));
};

//
exports.testRequest = (req, res) => {
    body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        postBody = JSON.parse(body);
        let jsonResponse = {
            "text": "Post Request Value is  " + postBody.value
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(jsonResponse));
    });
};

//
exports.invalidRequest = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};