const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: {
        filename: { type: String, required: false },
        originalname: { type: String, required: false },
        path: { type: String, required: false },
    },
}, { timestamps: true }); // Optionally, add timestamps for createdAt and updatedAt

module.exports = mongoose.model('Product', ProductSchema);
