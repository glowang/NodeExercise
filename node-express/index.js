const express = require("express");
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost'
const port = 3000

const app = express();
app.use(morgan('dev')); //indicate using the middleware

app.use(express.static(__dirname+'/public'));

// set up an server
// next is an additional middleware, optional
app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1></h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname,() => {
    console.log("hehe");
});