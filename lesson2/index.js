const fs = require('fs');
// fs.writeFile('demo1.txt','i am ekRoni',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('success');
//     }
// })

// fs.appendFile('demo1.txt', '. Now i am in jashore', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('success');
//     }
// })

// fs.readFile('demo2.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.rename('demo1.txt','demo2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('success')
//     }
// })

// fs.unlink('demo2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('success');
//     }
// })


// fs.existsSync('demo3.txt',(result)=>{
//     if(result){
//         console.log('found');
//     }
//     else{
//         console.log('not found')
//     }
// })
// console.log('hello');
const read=fs.readFileSync('demo2.txt');
