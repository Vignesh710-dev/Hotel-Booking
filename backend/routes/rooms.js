const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res) => {
    try {
        const { name, description, price, image_url, amenities } = req.body;
        const [result] = await db.execute(
            'INSERT INTO rooms (name, description, price, image_url, amenities) VALUES (?, ?, ?, ?, ?)',
            [name, description, price, image_url, JSON.stringify(amenities)]
        );
        res.json({ success: true, id: result.insertId });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const [rooms] = await db.execute('SELECT * FROM rooms');
        console.log('Fetched rooms:', rooms); // Debug log
        res.json(rooms);
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch rooms',
            error: error.message 
        });
    }
});

module.exports = router;