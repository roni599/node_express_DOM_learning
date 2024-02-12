const http=require('http');
const PORT=3000;
const hostName='127.0.0.1';

// const myServer=http.createServer((req,res)=>{
//     res.writeHead(202,{'Content-Type':'text/html'})
//     res.write('<h1>This is my first server</h1>');
//     res.end();
// });
// myServer.listen(PORT,hostName,()=>{
//     console.log(`Server Listing at http://${hostName}:${PORT}`);
// });

const myServer=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('<h1>This is the home page</h1>');
        res.end();
    }
    else if(req.url==='/contact'){
        res.write('<h1>This is the contact page</h1>');
        res.end();
    }
    else if(req.url==='/about'){
        res.write('<h1>This is the about page</h1>');
        res.end();
    }
    else{
        res.write('<h1>404!! Not a valid URL</h1>');
        res.end();
    }
});
myServer.listen(PORT,hostName,()=>{
    console.log(`Server Listing at http://${hostName}:${PORT}`);
});

