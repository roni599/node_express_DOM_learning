const express=require('express');
const app=express();
const PORT=3000;
const HostName='127.0.0.1';
const userRouter=require('./routes/users.route');
const path=require('path')
const vies=path.join(__dirname,'/views/')
app.use('/api/user',userRouter);

app.get('/',(req,res)=>{
    const f=path.join(vies,'index.html')
    res.sendFile(f)
    res.cookie('name','ekRoni');
    res.cookie('age','20')
    res.clearCookie('name')
    res.clearCookie('age')
    res.append('id',"41200101460")
    res.end();
});

app.use((req,res)=>{
    res.send('<h1>404 !!! Not a valid url</h1>')
});

module.exports={
    app,
    PORT,
    HostName
};