/*console.log("Hello world");
console.log("Irfan Ullah");
const http = require('http'); 
http.createServer((req, res)=>{
    if (req.url === '/') res.end('Hello')
     else res.writeHead(404).end();}).listen(3000); */

const express = require('express'); const app = express();
app.use(express.json()); app.use('/api/users', (req,res)=>{
    res.end('hello users')
}); 
app.use(express.json()); app.use('/api/products', (req,res)=>{
    res.end('this is products')
});
app.use(express.json()); app.use('/api/orders', (req,res)=>{
    res.end('do you need orders')
});
app.listen(5000);
