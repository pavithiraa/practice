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



server.listen(8000,((req,res)=>{
    console.log(server.address());
    console.log("server created using http! listening on port 8000")
}))




// used http node's native module - core API's
//http.CreateServer
//res.StatusCode
//res.setHeader
//res.end => execute the res and go offline
//res.writeHead(statuscode,setHeader)
//req.url => routing
//req.method ==> get,post,put,delete
//req.on =>post and put used to save data in a stream through chunks

// | API                | Purpose                           | Common Use Case               |
// | ------------------ | --------------------------------- | ----------------------------- |
// | `req.url`          | Requested path                    | Routing (`/`, `/about`)       |
// | `req.method`       | HTTP method                       | GET, POST, PUT, DELETE        |
// | `req.headers`      | Read request headers              | JWT, cookies, content type    |
// | `req.on("data")`   | Receive streamed request body     | POST/PUT data                 |
// | `req.on("end")`    | Fired after all body data arrives | Parse JSON, process request   |
// | `res.write()`      | Send response in chunks           | Streaming large responses     |
// | `res.end()`        | Finish the response               | Send final response to client |
// | `server.address()` | Get server address and port       | Debugging, dynamic ports      |

