// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // change this to your frontend domain for security
  }
});

app.get('/', (req, res) => {
  res.send('Teen Patti Game Server is running!');
});

io.on('connection', (socket) => {
  console.log('A player connected:', socket.id);

  socket.on('join-game', (data) => {
    console.log('Player joined:', data);
    io.emit('player-joined', data);
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
