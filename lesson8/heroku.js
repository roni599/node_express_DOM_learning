const http=require('http');
const fs=require('fs');
const PORT=3000;
const hostName='127.0.0.1';

const handleReadFile=(fileName,statusCode,res)=>{
    fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.writeHead(statusCode,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    })
}
const myServer=http.createServer((req,res)=>{
    if(req.url==='/'){
        handleReadFile('./views/index.html',200,res);
    }
    else if(req.url==='/contact'){
        handleReadFile('./views/contact.html',200,res);
    }
    else if(req.url==='/about'){
        handleReadFile('./views/about.html',200,res);
    }
    else{
        handleReadFile('./views/404.html',404,res);
    }
});

myServer.listen(PORT,hostName,()=>{
    console.log(`Server Runnig at http://${hostName}:${PORT}`);
})
