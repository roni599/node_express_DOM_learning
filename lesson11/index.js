const {app,PORT,HostName}=require('./app');

app.listen(PORT,HostName,()=>{
    console.log(`Server Listing Successfully at http://${HostName}:${PORT}`)
})