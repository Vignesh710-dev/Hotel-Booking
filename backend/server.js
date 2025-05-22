const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/bookings');
const roomRoutes = require('./routes/rooms');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/rooms', roomRoutes);

// Add this test route
app.get('/api/test', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT 1');
        res.json({ message: 'Database connection successful', data: rows });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));