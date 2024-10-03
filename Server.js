const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(__dirname + '/public'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('user joined', (username) => {
        socket.username = username;  // Store the username on the socket object
        io.emit('user joined', username);  // Notify all clients that a user joined
    });

    // Handle chat messages
    socket.on('chat message', (data) => {
        console.log('Received message:', data);

        // Send user's message to all clients
        io.emit('chat message', { user: data.user, message: data.message });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.username || socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
