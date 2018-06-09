const express=require('express');
const socketIO=require('socket.io');
const path=require('path');
const http=require('http');

const publicPath=path.join(__dirname,"../public");
const port= process.env.PORT ||3000;

var app=express();
var server=http.createServer(app);

app.use(express.static(publicPath));

server.listen(port,()=>{
    console
})