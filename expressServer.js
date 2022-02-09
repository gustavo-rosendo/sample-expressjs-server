// Express is a minimal and flexible Node.js web application framework 
// that provides a robust set of features for web and mobile applications.
// With a myriad of HTTP utility methods and middleware at your disposal, 
// creating a robust API is quick and easy.
// Ref.: https://expressjs.com/

const express = require('express');

const SERVER_PORT = 3000;

// "app" is a reference to the Express function (createApplication inside the Express module)
// invoked and is an Express application
const app = express();

// "all" is a method that takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('*', (req, res) => {
  // Express handles all the basic headers for us (status code, mime-type)
  res.send('<h1>Welcome to our home page!</h1>')
  // Express also handles the end() to close the http connection
});

app.listen(SERVER_PORT);

console.log('The server is up and listening on port: ' + SERVER_PORT);