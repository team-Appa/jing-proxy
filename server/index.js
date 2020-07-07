const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = 3010;

app.use(cors());
app.use(express.static(__dirname + '/../public/'));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})