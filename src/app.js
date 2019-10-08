const express = require('express');
const route = require('./route/router');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*');
  next();
});

app.use(route);

module.exports = app;
