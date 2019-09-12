const express = require('express');
const shareRouter = require('./route/share');

const app = express();

app.use(shareRouter);

module.exports = app;
