const express = require('express');
const app = express();

// the "app" object has a few methods:
// HTTP verbs / REST verbs
// the main verbs are:
// 1. get - READ (this is the default verb for all browsers)
// 2. post - CREATE
// 3. put - UPDATE
// 4. delete - DELETE
// 5. all - will accept any method

// Takes 2 args: (1) path, (2) callback function to execute if an HTTP request matches the verb
app.get('/', (req, res) => {
  res.send('<h1>Welcome to our home GET page!</h1>')
});
app.post('/', (req, res) => {
  res.send('<h1>Welcome to our home POST page!</h1>')
});
app.put('/', (req, res) => {

});
app.delete('/', (req, res) => {

});


app.listen(3000);
console.log('The server is listening on port 3000...');