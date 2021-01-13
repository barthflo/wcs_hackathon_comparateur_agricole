const express = require('express');
const app = express();
const router = require('./routes/index.routes');
const cors = require('cors');
const socketio = require('socket.io');

const io = socketio(app);

io.on("connection", (socket) => {
    console.log("we have a new connection!");
    socket.on('disconnect', () => {
        console.log("user has left");
    })
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api', router);



module.exports = app;