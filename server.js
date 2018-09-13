'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('smdp:index');
const cors = require('cors');
var path = require('path');
const port = 2000;
const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(cors());

app.use('/get-products', require('./app/routes/getProducts'));

app.listen(port, () => {
  console.log('SERVER STARTED ON', port);
});

module.exports = app;
