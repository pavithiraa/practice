const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
})


server.listen(8000,((req,res)=>{
    console.log("server created using http!")
}))