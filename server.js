
const express = require("express");
const socket = require("socket.io");
const path = require('path');

require('dotenv').config();// global V's


// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});


// Static folders
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static("public"));


// Declare routes variables
const indexRouter = require('./routes/index');


// setup views connecting with routes
app.use('/chat', indexRouter);


// Socket setup
const io = socket(server);

// when user logs in
io.on("connection", function (socket) {
  console.log("Made socket connection");
});



console.log('Global variable '+process.env.NAME);

// module.exports = app;
