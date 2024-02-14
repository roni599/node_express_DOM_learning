const {app,PORT,hostName}=require('./app');


app.listen(PORT,hostName,()=>{
    console.log(`Server runnig is http://${hostName}:${PORT}`);
});