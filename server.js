const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Booking endpoint
app.post('/api/bookings', async (req, res) => {
    const { name, email, phone, checkIn, checkOut, roomType, requests } = req.body;

    try {
        // Send email to admin
        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to: 'vigneshpk710@gmail.com', // Your admin email
            subject: 'New Booking Confirmation',
            html: `
                <h2>New Booking Received</h2>
                <p><strong>Customer Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Check-in:</strong> ${new Date(checkIn).toLocaleDateString()}</p>
                <p><strong>Check-out:</strong> ${new Date(checkOut).toLocaleDateString()}</p>
                <p><strong>Room Type:</strong> ${roomType}</p>
                <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
            `
        });

        // Send confirmation to customer
        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Your Booking Confirmation - MUVI Hotel',
            html: `
                <h2>Thank you for your booking, ${name}!</h2>
                <p>Your booking details:</p>
                <p><strong>Check-in:</strong> ${new Date(checkIn).toLocaleDateString()}</p>
                <p><strong>Check-out:</strong> ${new Date(checkOut).toLocaleDateString()}</p>
                <p><strong>Room Type:</strong> ${roomType}</p>
                <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
                <p>If you have any questions, please contact us at +91 9080700642.</p>
            `
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));