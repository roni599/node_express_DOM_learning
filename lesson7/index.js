const http=require('http');
const fs=require('fs');
const PORT=3000;
const hostName='127.0.0.1';

// const myServer=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(202,{'Content-Type':'text/html'});
//         res.write('<h1>This is the home page</h1>');
//         res.end();
//     }
//     else if(req.url==='/about'){
//         res.writeHead(202,{'Content-Type':'text/html'});
//         res.write('<h1>This is the about page</h1>');
//         res.end();
//     }
//     else if(req.url==='contact'){
//         res.writeHead(202,{'Content-Type':'text/html'});
//         res.write('<h1>This is the Contact page</h1>');
//         res.end();
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.write('<h1>404!! Not a valid url</h1>');
//         res.end();
//     }
// });


// const myServer=http.createServer((req,res)=>{
//     const HandleReadFile=(fileLocation,statusCode)=>{
//         fs.readFile(fileLocation,statusCode,res,(err,data)=>{
//             res.writeHead(statusCode,{'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         })
//     }
//     if(req.url==='/'){
//         fs.readFile('./views/index.html',(err,data)=>{
//             res.writeHead(202,{'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         })
//     }
//     else if(req.url==='/about'){
//         fs.readFile('./views/about.html',(err,data)=>{
//             res.writeHead(202,{'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         })

//     }
//     else if(req.url==='/contact'){
//         fs.readFile('./views/contact.html',(err,data)=>{
//             res.writeHead(202,{'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         })
//     }
//     else{
//         fs.readFile('./views/404.html',(err,data)=>{
//             res.writeHead(404,{"Content-Type":"text/html"});
//             res.write(data);
//             res.end();
//         })
//     }
// });


const myServer=http.createServer((req,res)=>{

    const HandleReadFile=(fileLocation,statusCode,)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    if(req.url==='/'){
        HandleReadFile('./views/index.html',202);
    }
    else if(req.url==='/about'){
       HandleReadFile('./views/about.html',202);
    }
    else if(req.url==='/contact'){
        HandleReadFile('./views/contact.html',202)
    }
    else{
        HandleReadFile('./views/404.html',404);
    }
});
myServer.listen(PORT,hostName,()=>{
    console.log(`Server listing at http://${hostName}:${PORT}`);
})