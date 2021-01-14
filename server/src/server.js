require('dotenv').config();
const importCsv = require('./importCsv');
const PORT = process.env.PORT;
const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const { addUser, RemoveUser, getUser, getUsersInRoom, removeUser } = require('./users.js');

// *** Uncomment to load csv files ***
// importCsv();
// ***

io.on("connection", (socket) => {
  console.log("we have a new connection!");

  socket.on('join', ({name, room}, callback) => {
    console.log(name, room);
    const {error, user} = addUser({id: socket.id, name: name, room: room});
    console.log(user);
    if(error){
      return callback(error);
    }
    socket.emit('message', {user:'Comparateur Agricole', text: `Bienvenue ${user.name}! Vous êtes maintenant connecté sur le chat!`});
    socket.broadcast.to(user.room).emit('message', {user: 'Comparateur Agricole', text: `${user.name} est en ligne!`});
    socket.join(user.room);

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    console.log(socket.id);
    const user = getUser(socket.id);
    console.log("user :" + user);
    io.to(user.room).emit('message', {user : user.name, text : message});
    callback();
  });

  socket.on('unconnect', () => {
      console.log("user has left");
      removeUser(socket.id);
  })
})

server.listen(PORT, (err) => {
  if(err){
    console.error(`Error : ${err.message}`);
  } else {
    console.log('Server started on ' + PORT)
  }
})


