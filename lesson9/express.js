// const express=require('express');
// const app=express();
// const PORT=3000;

// app.listen(PORT,()=>{
//     console.log(`Server is running at http://localhost:${PORT}`)
// })

const {app,PORT,hostName}=require('./app');
app.listen(PORT,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
})