
// Call packages
const path = require('path');
const http = require('http');
const express = require('express');
const socketio =  require('socket.io');

// Initialize variables
const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Declare routes variables
const indexRouter = require('./routes/index');


// Static folders
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// setup views connecting with routes
app.use('/', indexRouter);


const PORT = 8000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`   ));

module.exports = app;
  