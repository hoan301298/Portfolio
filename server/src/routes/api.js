const express = require('express');
const mailTrapService = require('./emailService/email.router');
const api = express();

api.use('/', mailTrapService);

module.exports = api;