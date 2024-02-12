const express=require('express');
const app=express();
const PORT=3000;
const hostName='127.0.0.1';

app.get('/',(req,res)=>{
    // const id=req.query.id;
    // const name=req.query.name;
    const{name,id}=req.query
    res.send(`<h1>Student name is : ${name}<br> Student id is : ${id}</h1>`);
})

app.listen(PORT,hostName,()=>{
    console.log(`Server running at http://${hostName}:${PORT}`);
})