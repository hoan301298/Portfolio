const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

module.exports = mongoose.model('subscription', subscriptionSchema);