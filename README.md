# Online Chat Application

This is an online chat application that allows for multiple users to create usernames and send messages to one another

## Features

- Real-time chat messaging between users via websockets (Socket.IO)
- Notifications upon users joining
- Server-side logic for handling WebSocket Connection

# How does this work

**1. User Joins Chat:** After a user opens the page they are prompted to enter a username. After the username is entered it is sent to the server, which will notify all connected users that a new user has joined.

**2. Chat Messaging Capability:** Users are then able to send messages via the input field, messages are sent to the server via WebSocket and then broadcast to all connected users. All users will see the message appear in the chat window

**3. Disconnection:** The server logs each time that a user disconnects

## Download Prerequisites

-**Node.js**

## How to Utilize this Application

### 1. Clone the repository

```bash 
git clone https://github.com/manny-r31/Chat-app.git
```
### 2. Navigate to project directory

```bash 
cd Chat-app
```

### 3. Install dependencies

```
npm install
```

This will install the following dependencies:
- express: Handling HTTP requests, serving static files
- socket.io: Real-time bidirectional communication between server/client

### 4. Run the Application
Run the following code to start the server
```bash
npm run build
```

This will start the server on http://localhost:3000 

### 5. Open the application
Inside of your web browser, navigate to http://localhost:3000

Users will be prompted to enter a username, after a username is entered, all users will be able to send chat messages as well as view those sent by others.