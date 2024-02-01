const {app,PORT,hostName}=require('./app');

app.listen(PORT,hostName,()=>{
    console.log(`Server listing at http://${hostName}:${PORT}`);
})