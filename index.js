const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.get('/miki', (req, res) => {
  res.send('Hello Miki!!!!')
})

app.listen(3000, () => {
  console.log('server started');
});
