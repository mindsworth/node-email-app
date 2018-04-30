const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send({ greeting: 'Hello' });
});

app.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});
