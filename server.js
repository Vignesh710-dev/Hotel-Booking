const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Add this for Formspree
require('dotenv').config();
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/bookings', limiter);

const app = express();
app.use(bodyParser.json());

// Formspree configuration
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqapjojd'; // Replace with your Formspree ID

// Enhanced email configuration with debugging
// Add at the top with other requires
const fs = require('fs');
const emailLogStream = fs.createWriteStream('./email.log', { flags: 'a' });

// Modify your transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true, // Enable SMTP debugging
    logger: {
        level: 'debug',
        write: (message) => {
            emailLogStream.write(message + '\n');
            console.log(message); // Also show in console
        }
    }
});

// Add this test endpoint
app.get('/api/test', (req, res) => {
    res.json({ status: "Server is working!" });
});

// Booking endpoint
// Modified booking endpoint with Formspree option
app.post('/api/bookings', async (req, res) => {
    const { name, email, phone, checkIn, checkOut, roomType, requests } = req.body;

    try {
        // Send email to admin (you)
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'vigneshvcoder@gmail.com',
            subject: `New Booking: ${name} - ${roomType}`,
            html: `
                <h2>New Booking Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Check-in:</strong> ${checkIn}</p>
                <p><strong>Check-out:</strong> ${checkOut}</p>
                <p><strong>Room Type:</strong> ${roomType}</p>
                <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
            `
        });

        // Option 1: Using Formspree
        await axios.post(FORMSPREE_ENDPOINT, {
            _replyto: email,
            _subject: 'New Booking from ' + name,
            name,
            email,
            phone,
            checkIn,
            checkOut, 
            roomType,
            requests: requests || 'None'
        });

        // Option 2: Keep existing nodemailer code as fallback
        // Send email to admin
        // Temporarily replace your email sending code with:
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'vigneshvcoder@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email from your server'
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

        // Enhanced response
        res.json({ 
            success: true,
            message: "Booking received. Confirmation sent to your email."
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false,
            message: "Failed to process booking. Please try again later."
        });
    }
});

// Add near other route imports
const path = require('path');
// Add near top with other requires
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Add this endpoint
app.post('/api/create-payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateAmount(req.body), // Implement this function
            currency: 'inr',
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add admin dashboard route
app.get('/admin/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

// Add payment processing endpoint
app.post('/api/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;
    
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: currency || 'inr',
            metadata: {
                integration_check: 'accept_a_payment'
            }
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));

// Make sure your .env file has these variables:
// EMAIL_USER=yourgmail@gmail.com
// EMAIL_PASS=your_app_specific_password


// Add at the top
const fs = require('fs');
const util = require('util');
const logFile = fs.createWriteStream('server.log', { flags: 'a' });

// Replace console.error with:
console.error = function(msg) {
    logFile.write(util.format(msg) + '\n');
    process.stderr.write(util.format(msg) + '\n');
};

// Add this debug code right after your transporter setup
transporter.verify(function(error, success) {
    if (error) {
        console.error('SMTP Connection Error:', error);
    } else {
        console.log('SMTP Server is ready to send messages');
    }
});