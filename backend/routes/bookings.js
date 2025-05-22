const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const [bookings] = await db.execute('SELECT * FROM bookings');
        console.log('Fetched bookings:', bookings); // Debug log
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch bookings',
            error: error.message 
        });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('Received booking data:', req.body); // Debug log

        const { room_id, guest_name, email, phone, check_in, check_out, guests, total_price } = req.body;
        
        // Validate required fields
        if (!room_id || !guest_name || !email || !phone || !check_in || !check_out) {
            return res.status(400).json({
                success: false,
                message: 'Missing required booking information'
            });
        }

        const [result] = await db.execute(
            'INSERT INTO bookings (room_id, guest_name, email, phone, check_in, check_out, guests, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [room_id, guest_name, email, phone, check_in, check_out, guests || 1, total_price || 0]
        );

        console.log('Booking saved:', result); // Debug log

        res.json({
            success: true,
            message: 'Booking confirmed successfully!',
            bookingId: result.insertId
        });
    } catch (error) {
        console.error('Detailed booking error:', error); // Debug log
        res.status(500).json({
            success: false,
            message: 'Failed to process booking: ' + error.message
        });
    }
});

module.exports = router;