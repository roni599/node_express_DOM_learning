const http=require('http');
const PORT=3000;
const hostName='127.0.0.1';

// const myServer=http.createServer((req,res)=>{
//     res.end('<h1>This is my first server</h1>');
// }).listen(PORT,hostName,()=>{
//     console.log(`Server Listint successfully at http://${hostName}:${PORT}`)
// })

const myServer=http.createServer((req,res)=>{
    res.end('<h1>This is my first Server</h1>');
});

myServer.listen(PORT,hostName,()=>{
    console.log(`Server Listing successfully at http://${hostName}:${PORT}`);
})