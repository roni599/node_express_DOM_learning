const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';


const handleReqRes = (fileLocation, res, statuscode) => {
    fs.readFile(fileLocation, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.writeHead(statuscode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    })
}
const myServer = http.createServer((req, res) => {
    if (req.url === '/') {
        handleReqRes('./views/index.html', res, 200);
    }
    else if (req.url === '/contact') {
        handleReqRes('./views/contact.html', res, 200);
    }
    else if (req.url === '/about') {
        handleReqRes('./views/about.html', res, 200);
    }
    else {
        handleReqRes('./views/404.html', res, 404)
    }
});

myServer.listen(PORT, hostName, () => {
    console.log(`Server listing Successfully at http://${hostName}:${PORT}`)
})