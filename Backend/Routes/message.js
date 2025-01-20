const express = require('express');
const router = express.Router();
const Message = require('../Models/message'); 

router.post('/', async (req, res) => {
    try {
        const {name , email, message } = req.body;
        const newMessage = new Message({ name , email, message });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const message = await Message.find();
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;