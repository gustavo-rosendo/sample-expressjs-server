const express = require('express');
const app = express();

// the "app" object comes with a "use" method
// it takes 1 arg: the middleware you want to run
app.use(express.static('public'));

app.listen(3000);
console.log('The server is listening on port 3000...');