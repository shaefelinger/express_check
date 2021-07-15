const express = require('express');
const app = express(); //creates express-app-object

const port = 3000; // use port 3000

// root-folder
app.get('/', function (req, res) {
  console.log('A request was made to the root');
  res.send('A request was made to the root');
});

app.get('/test', (req, res, next) => {
  res.send('test-working');
});

app.listen(port, function () {
  console.log(`Server running and listening on port ${port}`);
});
