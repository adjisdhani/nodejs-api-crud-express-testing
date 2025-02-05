const express = require('express');
const bodyParser = require('express').json;
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser());
app.use('/api', bookRoutes);

module.exports = app;