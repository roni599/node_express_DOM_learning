const express=require('express');
const app=express();
const PORT=3000;
const hostName='127.0.0.1';

app.get('/',(req,res)=>{
    const { name ,id} = req.headers;
    res.send(`Student name : ${name} and ID is ${id}`);
})

app.listen(PORT,hostName,()=>{
    console.log(`Server listing at http://${hostName}:${PORT}`);
})