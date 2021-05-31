# TwinglerChat

## App Decription

Web chat application where a user may send messages. On submit, the messages are displayed on screen and saved to a database. New messages will be displayed on the screen using WebSockets (i.e. an update from the server), not a refresh of the entire page. However, if the page is refreshed, data. must be returned from the database.  This application will be implemented using the Node.JS web framework (create a WebSocket server instead of an HTTP server) and an (SQLite) database. 
