const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('message');
const usernameModal = document.getElementById('usernameModal');
const usernameForm = document.getElementById('usernameForm');
let username = '';

usernameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('username');
    if (input.value) {
        username = input.value;
        socket.emit('user joined', username);  // Inform the server about the new user
        usernameModal.style.display = 'none';
        form.style.display = 'block';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', { user: username, message: input.value });
        input.value = '';
    }
});

socket.on('chat message', function(data) {
    const item = document.createElement('li');
    item.textContent = `${data.user}: ${data.message}`;
    document.getElementById('messages').appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('user joined', function(user) {
    const item = document.createElement('li');
    item.textContent = `${user} has joined the chat`;
    item.style.fontStyle = 'italic';
    document.getElementById('messages').appendChild(item);
});