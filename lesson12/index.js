const {app,PORT,HostName}=require('./app');

app.listen(PORT,HostName,()=>{
    console.log(`Server running is http://${HostName}:${PORT}`);
})