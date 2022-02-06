const port=process.env.port;

const io=require('socket.io')(port || 3000,{
  cors: {
    origin: '*',
  }
});


io.on('connection',(socket)=>{
  console.log(socket.id);
  socket.on('message',(name,messagee)=>{
    console.log("@#$%^&*")
    io.emit('recieve',name,messagee);
  })
})