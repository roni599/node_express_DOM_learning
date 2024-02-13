const express=require('express');
const app=express();
const calculatorRouter=require('./routers/calculators.route');
const path = require('path');
const fs = require('fs');
const PORT=3000;
const hostName='127.0.0.1';

const fileLocation = path.join(__dirname, '/views/');
const errorFileName = path.join(fileLocation, '404.html');

app.use(calculatorRouter);

app.get('/', (req, res) => {
    const fileName = path.join(fileLocation, 'index.html');
    if (fs.existsSync(fileName)) {
        res.sendFile(fileName);
    }
    else {
        res.status(404).sendFile(errorFileName);
    }
})

app.use((req,res)=>{
    res.status(404).sendFile(errorFileName);
})

module.exports={
    app,
    PORT,
    hostName
}