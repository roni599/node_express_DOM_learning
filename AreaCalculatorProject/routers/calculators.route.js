const express=require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');
const router=express.Router();

const fileLocation=path.join(__dirname,'../views/');
const errorFileName=path.join(fileLocation,'404.html');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/triangle',(req,res)=>{
    const fileName=path.join(fileLocation,'triangle.html')
    if(fs.existsSync(fileName)){
        res.sendFile(fileName);
    }
    else{
        res.status(404).sendFile(errorFileName);
    }
})

router.get('/circle',(req,res)=>{
    const fileName=path.join(fileLocation,'circle.html');
    if(fs.existsSync(fileName)){
        res.sendFile(fileName);
    }
    else{
        res.status(404).sendFile(errorFileName);
    }
})

router.post('/circle',(req,res)=>{
    const {radius}=req.body;
    const result=Math.PI*radius*radius;
    res.send(`<h1 style="text-align: center; margin-top: 50px;">The area of circle is : ${result}</h1>`);
})

router.post('/triangle',(req,res)=>{
    const {height,base}=req.body;
    const result=0.5*height*base;
    res.send(`<h1 style="text-align: center; margin-top: 50px;">The area of triangle is : ${result}</h1>`)
})

module.exports=router;