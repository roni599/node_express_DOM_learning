const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    const reqReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, { 'content-type': 'thtml' });
            res.write(data);
            res.end();
        })
    }
    if (req.url === '/') {
        reqReadFile(200, './views/index.html');
    }
    else if (req.url === '/contact') {
        reqReadFile(200, './views/contact.html');
    }
    else if (req.url === '/about') {
        reqReadFile(200, './views/about.html');
    }
    else {
        reqReadFile(404, './views/error.html');
    }
})

myServer.listen(PORT, hostName, () => {
    console.log(`Server listing successfully at http://${hostName}:${PORT}`);
})