const http=require('http');
const port=3000;
const hostName='127.0.0.1';

const myServer=http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/html'})
    res.write('<h1>This is my first Server</h1>');
    res.end();
})
myServer.listen(port,hostName,()=>{
    console.log(`serve listing successfully at http://${hostName}:${port}`);
})