const express = require('express');
const app = express();

const _router = require('./router/router')

app.use('/', _router)

module.exports = app;
