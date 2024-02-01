// const http=require('http');
// const port=3000;
// const hostName='127.0.0.1';
// const myServer=http.createServer((req,res)=>{
//     res.end('<h1>this is my first server</h1>');
// })
// myServer.listen(port,hostName,()=>{
//     console.log(`server is running successfully at http://${hostName}:${port}`)
// });


const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';
const myServer = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('This is the Home page')
        res.end();
    }
    else if (req.url === '/about') {
        res.write('This is about page');
        res.end();
    }
    else if (req.url === '/contact') {
        res.write('This is the contact page');
        res.end();
    }
    else {
        res.write('Not Found')
        res.end();
    }
});
myServer.listen(port, hostName, () => {
    console.log(`Server is runnig successfully at http://${hostName}:${port}`);
})