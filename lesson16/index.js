const express=require('express');
const app=express();
const PORT=3000;
const hostName='127.0.0.1';
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('<h1 style="text-align: center; margin-top: 50px;">Welcome to Home page</h1>')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})
app.post('/register',(req,res)=>{
    const fullName=req.body.fullName;
    const age=req.body.age;
    res.send(`<h1 style="text-align: center; margin-top: 50px;">Student Name is : ${fullName} <br>And age is : ${age}</h1>`);
})
app.listen(PORT,hostName,()=>{
    console.log(`Server Listing at http://${hostName}:${PORT}`);
})