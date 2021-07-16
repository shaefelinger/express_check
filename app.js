const express = require('express');
const app = express(); //creates express-app-object

const port = process.env.PORT || 3000;

// root-folder
app.get('/', function (req, res) {
  console.log('A request was made to the root');
  res.send('A request was made to the root - working');
});

app.get('/test', (req, res, next) => {
  res.send('test-working');
});

app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
