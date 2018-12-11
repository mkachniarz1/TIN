const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    var query = url.parse(req.url, true).query;
    if (query.a == undefined || query.b == undefined) {
        res.write('Not enough parameters');
        res.end();
    }
    try {
        var a = parseFloat(query.a);
        var b = parseFloat(query.b);
    } catch (error) {
        res.write('Parameters not a number');
        res.end();
    }

    var operation = url.parse(req.url).pathname;

    if (operation == '/add') {
        res.write(`${a} + ${b} = ${a + b}`);
        res.end();
    } else if (operation == '/sub') {
        res.write(`${a} - ${b} = ${a - b}`);
        res.end();
    } else if (operation == '/mul') {
        res.write(`${a} * ${b} = ${a * b}`);
        res.end();
    } else if (operation == '/div') {
        res.write(`${a} / ${b} = ${a / b}`);
        res.end();
    } else {
        res.write("Bad operation");
        res.end();
    }

});
server.listen(3000);

console.log('Listening on port 3000...');