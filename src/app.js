const express = require('express');
const route = require('./route/router');

const app = express();

app.use(route);

module.exports = app;
