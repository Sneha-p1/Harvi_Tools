const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    name: {
        type: String,
        required: true,
    
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);