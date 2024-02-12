const express=require('express');
const app=express();
const PORT=3000;
const HostName='127.0.0.1';
const userRouter=require('./routers/users.route');
const path=require('path');
const fs=require('fs');

const fileLocation=path.join(__dirname,'./views/');
const errorFileName=path.join(fileLocation,'404.html');
app.use('/api/users',userRouter);

app.get('/',(req,res)=>{
    const fileName=path.join(fileLocation,'index.html')
    if(fs.existsSync(fileName)){
        res.sendFile(fileName);
    }
    else{
        res.status(404).sendFile(errorFileName);
    }
});

app.use((req,res)=>{
    res.send('404!! not a valid url');
    res.end();
})

module.exports={
    app,
    PORT,
    HostName
}