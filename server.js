const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
// const { env } = require('./.env');

const app = express();

const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/')));

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
