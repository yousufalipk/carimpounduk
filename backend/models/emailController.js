const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

const Email = mongoose.model('emails', emailSchema);

module.exports = Email;