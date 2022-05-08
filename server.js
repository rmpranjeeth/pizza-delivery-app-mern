const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server working');
});

const port = process.env.PORT || 5000;

app.listen(port, () => 'server running on port');
