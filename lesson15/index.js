const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
const hostName = '127.0.0.1';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user', (req, res) => {
    const { name, id, University_name } = req.body;
    res.send(`Student name is ${name} And id is : ${id} And University_name is : ${University_name}`);
})
app.listen(PORT, hostName, () => {
    console.log(`Server running is http://${hostName}:${PORT}`);
})