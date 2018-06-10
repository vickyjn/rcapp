const express=require('express');
const socketIO=require('socket.io');
const path=require('path');
const http=require('http');
const {generateMessage}=require('./utils/message');
const publicPath=path.join(__dirname,"../public");
const port= process.env.PORT ||3000;

var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on("connection",(socket)=>{
console.log("New user connected");


    socket.on("createMessage",(message,callback)=>{
    //console.log("new Message",message);
  
     io.emit('newMessage',generateMessage(message.from,message.text));
     callback('Acknowledgement from server');
 })

//Admin welcome message

socket.emit('newMessage',generateMessage('Admin','Welcome to Chat App'));

socket.broadcast.emit('newMessage',generateMessage('Admin','A new User has joined chat room'));



 socket.on("disconnect",()=>{
    console.log("User was disconnected");
 })


});




server.listen(port,()=>{
    console.log(`Server is up on ${port}`);
})