const socket = io();

// Handle form submission (when user sends a message)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#message').value = '';
    socket.emit('chat message', message);
    document.querySelector('#message').value = ''
});

// Receive chat messages from the server
socket.on('chat message', (messsage) => {
    const li = document.createElement('li');
    li.textContent = message;
    document.querySelector('#messages').appendChild(li);

});