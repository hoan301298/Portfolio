const express = require('express');
const { sendEmail } = require('./subscription.controller');
const { feedbackForm } = require('./feedback.controller');
const emailService = express.Router();

emailService.post('/subscribe', sendEmail);
emailService.post('/feedback', feedbackForm);

module.exports = emailService;