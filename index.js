// import { createServer } from 'http'
var http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.write("Running")
    res.end('Welcome to Nodejs')
}).listen(8080,()=>{
    console.log("Server is running on http://localhost:8080")
})