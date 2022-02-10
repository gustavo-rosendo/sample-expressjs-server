// Express is a minimal and flexible Node.js web application framework 
// that provides a robust set of features for web and mobile applications.
// With a myriad of HTTP utility methods and middleware at your disposal, 
// creating a robust API is quick and easy.
// Ref.: https://expressjs.com/

const path = require('path');

const express = require('express');

const SERVER_PORT = 3000;

// "app" is a reference to the Express function (createApplication inside the Express module)
// invoked and is an Express application
const app = express();

// serve up static files with only 1 line!! :-)
app.use(express.static('public'));

// "all" is a method that takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('/', (req, res) => {
  // Express handles all the basic headers for us (status code, mime-type)
  // read in node.html
  console.log(path.join(__dirname + '/node.html'));
  res.sendFile(path.join(__dirname + '/node.html'));
  
  //res.send('<h1>Welcome to our home page!</h1>')
  // Express also handles the end() to close the http connection
});

app.all('*', (req, res) => {
  res.send('<h1>Sorry, this page does not exist!</h1>');
});

app.listen(SERVER_PORT);

console.log('The server is up and listening on port: ' + SERVER_PORT);