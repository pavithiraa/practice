const http = require('http');
const server = http.createServer((req,res)=>{
    // res.statusCode =200;
    // res.setHeader("Content-Type", "text/plain");
    // res.end("Hello World");
    if(req.url==='/' && req.method ==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Hello World</h1>')
    }else if(req.url==='/about' && req.method ==='GET'){
        res.writeHead(200,{
        'content-type':'text/html'
        })
        res.end("<h3>Welocome to Company</h3>")}
})

// server.get('/',(req,res)=>{
//     res.send("Hello world from get method")
// })

server.address()

server.listen(8000,((req,res)=>{
    console.log("server created using http! listening on port 8000")
}))


