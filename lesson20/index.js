const express = require('express');
const app = express();
const PORT = 3000;
const hostName = `127.0.0.1`;
const path = require('path');
const fs = require('fs');

const fileLocation = path.join(__dirname, '/views/')
const errorFileName = path.join(fileLocation, '404.html');


app.use(express.static('public'));

app.get('/', (req, res) => {
    const fileName = path.join(fileLocation, 'index.html');
    if (fs.existsSync(fileName)) {
        res.sendFile(fileName);
    }
    else {
        res.status(404).sendFile(errorFileName);
    }
});

app.use('*', (req, res) => {
    res.status(404).sendFile(errorFileName);
});

app.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
});