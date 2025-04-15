// Room data
const rooms = [
    {
        id: 1,
        name: "Aiswary Kings Inn",
        description: "Spacious room with king-size bed",
        price: 150,
        amenities: ["WiFi", "TV", "AC", "Mini-bar"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500"
    },
    {
        id: 2,
        name: "JBR Residency",
        description: "Luxury suite with separate living area",
        price: 250,
        amenities: ["WiFi", "TV", "AC", "Mini-bar", "Jacuzzi"],
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500"
    },
    {
        id: 3,
        name: "Hotel Grish Park",
        description: "Perfect for families with connecting rooms",
        price: 300,
        amenities: ["WiFi", "TV", "AC", "Kitchenette", "Crib"],
        image: "https://i.pinimg.com/736x/52/4b/ab/524bab0b573f8d1bcaf1f41c44e005e0.jpg"
    },
    {
        id: 4,
        name: "Starwin Residency",
        description: "Stunning ocean views from your private balcony",
        price: 350,
        amenities: ["WiFi", "TV", "AC", "Balcony", "Sea View","Lounge"],
        image: "https://i.pinimg.com/736x/e7/d0/98/e7d0984291b6f637409154acac4aedbd.jpg"
    },
    {
        id: 5,
        name: "Kifa Residency",
        description: "Ultimate luxury with premium services",
        price: 500,
        amenities: ["WiFi", "TV", "AC", "Jacuzzi", "Butler", "Lounge"],
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500"
    },
    {
        id: 6,
        name: "Coral Residency",
        description: "Romantic getaway with special amenities",
        price: 400,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/9e/37/13/9e3713a2136a05bd71fe58e13206c8b4.jpg"
    },
    {
        id: 7,
        name: "SSK Green Place",
        description: "Romantic getaway with special amenities",
        price: 400,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/f6/bf/2e/f6bf2ead8546606c5da8094f461b7299.jpg"
    },
    {
        id: 8,
        name: "SSK Malligai",
        description: "Romantic getaway with special amenities",
        price: 1600,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/7a/48/00/7a48002fe44af3fae153331ba65ec569.jpg"
    },
    {
        id: 9,
        name: "Ibrizz Park",
        description: "Romantic getaway with special amenities",
        price: 1600,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/7a/48/00/7a48002fe44af3fae153331ba65ec569.jpg"
    },
    {
        id: 10,
        name: "Viceroy Residency Manor",
        description: "Romantic getaway with special amenities",
        price: 1600,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/1d/a4/1c/1da41ce54743dd994c28996dae941644.jpg"
    },
    {
        id: 11,
        name: "Faiz Residency",
        description: "Romantic getaway with special amenities",
        price: 1600,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/e5/45/5f/e5455ff7da2863a8286f452969055f57.jpg"
    },
    {
        id: 12,
        name: "Riya Residency",
        description: "Romantic getaway with special amenities",
        price: 1600,
        amenities: ["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"],
        image: "https://i.pinimg.com/736x/37/a6/54/37a6543706272040bc763fee7a7f7e03.jpg"
    },
    
    
    
    
    
];

// DOM elements
const roomsContainer = document.getElementById('rooms-container');
const bookingForm = document.getElementById('booking-form');
const confirmationSection = document.getElementById('confirmation');
const quickSearchBtn = document.getElementById('quick-search');

// Display rooms
function displayRooms() {
    roomsContainer.innerHTML = ''; // Clear existing content
    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <div class="room-image-container">
                <img src="${room.image}" alt="${room.name}" class="room-image">
            </div>
            <div class="room-info">
                <h3>${room.name}</h3>
                <p class="room-description">${room.description}</p>
                <div class="room-amenities">
                    ${room.amenities.map(amenity => 
                        `<span class="amenity-tag">
                            <i class="fas fa-${getAmenityIcon(amenity)}"></i> ${amenity}
                        </span>`
                    ).join('')}
                </div>
                <p class="room-price">$${room.price} / night</p>
                <button class="book-now-btn" onclick="showBookingForm(${room.id})">
                    <span>Book Now</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        roomsContainer.appendChild(roomCard);
    });
}

function getAmenityIcon(amenity) {
    const icons = {
        'WiFi': 'wifi',
        'TV': 'tv',
        'AC': 'snowflake',
        'Mini-bar': 'wine-glass-alt',
        'Jacuzzi': 'hot-tub',
        'Kitchenette': 'utensils',
        'Crib': 'baby',
        'Balcony': 'door-open',
        'Sea View': 'water',
        'Butler': 'concierge-bell',
        'Lounge': 'couch',
        'Champagne': 'glass-cheers',
        'Flowers': 'flower',
        'Spa Access': 'spa',
        'Desk': 'desk',
        'Printer': 'print',
        'Coffee Machine': 'coffee'
    };
    return icons[amenity] || 'check-circle';
}

// Show booking form
function showBookingForm(roomId) {
    const room = rooms.find(r => r.id === roomId);
    
    bookingForm.innerHTML = `
        <h2>Book ${room.name}</h2>
        <form id="booking-details" onsubmit="confirmBooking(event, ${roomId})">
            <div>
                <label for="checkin">Check-in:</label>
                <input type="date" id="checkin" required>
            </div>
            
            <div>
                <label for="checkout">Check-out:</label>
                <input type="date" id="checkout" required>
            </div>
            
            <div>
                <label for="guests">Number of Guests:</label>
                <input type="number" id="guests" min="1" max="4" required>
            </div>
            
            <div>
                <label for="name">Full Name:</label>
                <input type="text" id="name" required>
            </div>
            
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </div>
            
            <div>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" required>
            </div>
            
            <button type="submit">Confirm Booking</button>
        </form>
    `;
    bookingForm.classList.remove('hidden');
    bookingForm.scrollIntoView({ behavior: 'smooth' });
}

// Quick search functionality
if (quickSearchBtn) {
    quickSearchBtn.addEventListener('click', function() {
        const checkin = document.getElementById('quick-checkin').value;
        const checkout = document.getElementById('quick-checkout').value;
        const guests = document.getElementById('quick-guests').value;
        
        if (checkin && checkout) {
            document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Please select check-in and check-out dates');
        }
    });
}

// Confirm booking
function confirmBooking(event, roomId) {
    event.preventDefault();
    const room = rooms.find(r => r.id === roomId);
    const form = event.target;
    
    const bookingDetails = {
        room: room.name,
        checkIn: form.checkin.value,
        checkOut: form.checkout.value,
        guests: form.guests.value,
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        total: calculateTotal(room.price, form.checkin.value, form.checkout.value),
        confirmationNumber: Math.floor(Math.random() * 1000000)
    };
    
    displayConfirmation(bookingDetails);
}

// Calculate total price
function calculateTotal(price, checkIn, checkOut) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    return price * diffDays;
}

// Display confirmation
function displayConfirmation(booking) {
    bookingForm.classList.add('hidden');
    confirmationSection.innerHTML = `
        <h2>Booking Confirmed!</h2>
        <div class="confirmation-details">
            <p><i class="fas fa-hotel"></i> <strong>Room:</strong> ${booking.room}</p>
            <p><i class="fas fa-calendar-check"></i> <strong>Check-in:</strong> ${booking.checkIn}</p>
            <p><i class="fas fa-calendar-times"></i> <strong>Check-out:</strong> ${booking.checkOut}</p>
            <p><i class="fas fa-users"></i> <strong>Guests:</strong> ${booking.guests}</p>
            <p><i class="fas fa-user"></i> <strong>Name:</strong> ${booking.name}</p>
            <p><i class="fas fa-envelope"></i> <strong>Email:</strong> ${booking.email}</p>
            ${booking.phone ? `<p><i class="fas fa-phone"></i> <strong>Phone:</strong> ${booking.phone}</p>` : ''}
            <p class="total"><i class="fas fa-receipt"></i> <strong>Total:</strong> $${booking.total}</p>
        </div>
        <p><strong>Confirmation #:</strong> <span class="confirmation-number">${booking.confirmationNumber}</span></p>
        <button onclick="window.location.reload()">Book Another Room</button>
    `;
    confirmationSection.classList.remove('hidden');
    confirmationSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the page
// Add these at the top of your script
document.addEventListener('DOMContentLoaded', () => {
    displayRooms();
    setupThemeToggle();
    setupFormClose();
});

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

function setupFormClose() {
    document.getElementById('close-form').addEventListener('click', () => {
        document.getElementById('booking-form').classList.add('hidden');
    });
}

// Add this function to your existing script.js file
function setupBlogLinks() {
    const blogButtons = document.querySelectorAll('.blog-card .btn');
    
    blogButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the blog title and content
            const blogCard = this.closest('.blog-card');
            const blogTitle = blogCard.querySelector('h3').textContent;
            const blogImage = blogCard.querySelector('img').src;
            
            // Store the blog info in localStorage
            localStorage.setItem('currentBlog', JSON.stringify({
                title: blogTitle,
                image: blogImage,
                id: index + 1
            }));
            
            // Redirect to blog detail page (you'll need to create this)
            window.location.href = 'blog-detail.html';
        });
    });
}

// Add this to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Load saved reviews from localStorage
    const savedReviews = JSON.parse(localStorage.getItem('hotelReviews')) || [];
    const reviewsContainer = document.querySelector('.reviews-container');
    
    // Display saved reviews
    savedReviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-rating">
                ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                ${Array(5 - review.rating).fill('<i class="far fa-star"></i>').join('')}
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">
                <img src="${review.avatar}" alt="${review.name}">
                <div>
                    <h4>${review.name}</h4>
                    <p>${review.type || 'Guest'}</p>
                </div>
            </div>
        `;
        reviewsContainer.appendChild(reviewCard);
    });

    // Rating stars functionality
    const stars = document.querySelectorAll('.rating-stars i');
    let selectedRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            selectedRating = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('active');
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });

    // Comment form submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('review-name').value;
            const email = document.getElementById('review-email').value;
            const text = document.getElementById('review-text').value;
            
            if (!name || !email || !text || selectedRating === 0) {
                alert('Please fill all fields and select a rating');
                return;
            }
            
            // Create new review object
            const newReview = {
                name: name,
                email: email,
                text: text,
                rating: selectedRating,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
                date: new Date().toISOString()
            };
            
            // Get existing reviews from localStorage
            const savedReviews = JSON.parse(localStorage.getItem('hotelReviews')) || [];
            
            // Add new review
            savedReviews.push(newReview);
            
            // Save back to localStorage
            localStorage.setItem('hotelReviews', JSON.stringify(savedReviews));
            
            // Create and display new review card
            const reviewsContainer = document.querySelector('.reviews-container');
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <div class="review-rating">
                    ${Array(selectedRating).fill('<i class="fas fa-star"></i>').join('')}
                    ${Array(5 - selectedRating).fill('<i class="far fa-star"></i>').join('')}
                </div>
                <p class="review-text">"${text}"</p>
                <div class="review-author">
                    <img src="${newReview.avatar}" alt="${name}">
                    <div>
                        <h4>${name}</h4>
                        <p>Guest</p>
                    </div>
                </div>
            `;
            
            reviewsContainer.prepend(reviewCard);
            
            // Reset form
            commentForm.reset();
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            selectedRating = 0;
            
            // Create and show success modal
            const successModal = document.createElement('div');
            successModal.className = 'review-success-modal';
            successModal.innerHTML = `
                <div class="modal-content">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank you for your review!</h3>
                    <p>Your feedback is valuable to us.</p>
                    <button class="close-modal">OK</button>
                </div>
            `;
            document.body.appendChild(successModal);
            
            // Close modal when clicked
            successModal.querySelector('.close-modal').addEventListener('click', () => {
                document.body.removeChild(successModal);
            });
        });
    }
});

// Handle blog read more buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get blog post details
        const blogCard = this.closest('.blog-card');
        const blogId = this.getAttribute('data-blog-id');
        const blogTitle = blogCard.querySelector('h3').textContent;
        const blogImage = blogCard.querySelector('img').src;
        const blogExcerpt = blogCard.querySelector('p').textContent;
        
        // Store blog data in localStorage
        localStorage.setItem('currentBlog', JSON.stringify({
            id: blogId,
            title: blogTitle,
            image: blogImage,
            excerpt: blogExcerpt
        }));
        
        // Redirect to blog detail page
        window.location.href = this.getAttribute('href');
    });
});

// Get the contact form
const contactForm = document.getElementById('contact-form');

// Add event listener for form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const phone = document.getElementById('contact-phone').value;
        const message = document.getElementById('contact-message').value;
        
        // Validate form (basic validation)
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        
        // Create a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'contact-success';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Thank you for your message!</h3>
            <p>We have received your inquiry and will respond shortly.</p>
        `;
        
        // Replace form with success message
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
        
        // Optional: Reset form after 5 seconds
        setTimeout(() => {
            contactForm.innerHTML = `
                <input type="text" id="contact-name" placeholder="Name" required>
                <input type="email" id="contact-email" placeholder="Email" required>
                <input type="tel" id="contact-phone" placeholder="Phone Number" required>
                <textarea id="contact-message" placeholder="Message" required></textarea>
                <button type="submit" class="btn">SEND</button>
            `;
        }, 5000);
    });
}
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(menuToggle);
    
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        menuIcon.innerHTML = isActive 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    // Close menu when clicking outside or on a link
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && e.target !== menuToggle) {
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    navLinks.classList.remove('active');
                    menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = '';
                }
            }
        });
    });
});
// AI Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotSend = document.querySelector('.chatbot-send');
    const chatbotText = document.querySelector('.chatbot-text');
    const chatbotMessages = document.querySelector('.chatbot-messages');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
    });

    // Close chatbot
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });

    // Send message
    function sendMessage() {
        const message = chatbotText.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatbotText.value = '';
            
            // Simulate bot response after a short delay
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 800);
        }
    }

    // Send message on button click or Enter key
    chatbotSend.addEventListener('click', sendMessage);
    chatbotText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', sender);
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate bot responses
    function generateBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! How can I assist you with your booking today?";
        } else if (lowerMessage.includes('room') || lowerMessage.includes('rooms')) {
            return "We offer several room types: Deluxe, Executive Suite, and Presidential Suite. Would you like details about any specific one?";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Our room prices start at ₹5,000 per night for Deluxe rooms. Prices vary based on season and availability.";
        } else if (lowerMessage.includes('book') || lowerMessage.includes('reservation')) {
            return "You can book directly on our website or call us at +91 9080700642. Would you like me to guide you through the booking process?";
        } else if (lowerMessage.includes('amenities') || lowerMessage.includes('facilities')) {
            return "We offer a swimming pool, spa, fitness center, and fine dining restaurant. All rooms include WiFi, minibar, and 24/7 room service.";
        } else if (lowerMessage.includes('check in') || lowerMessage.includes('check-in')) {
            return "Check-in time is 2 PM. Early check-in may be available upon request, subject to room availability.";
        } else if (lowerMessage.includes('check out') || lowerMessage.includes('check-out')) {
            return "Check-out time is 12 PM. Late check-out may be arranged for an additional fee, depending on availability.";
        } else {
            return "I'm here to help with your hotel inquiries. You can ask me about room types, pricing, amenities, or the booking process.";
        }
    }
});// AI Room Recommendation Feature
document.addEventListener('DOMContentLoaded', function() {
    const recommendationForm = document.querySelector('.recommendation-form');
    const budgetOptions = document.querySelectorAll('.budget-option');
    const amenityOptionsContainer = document.querySelector('.amenity-options');
    const nextStepBtn = document.querySelector('.next-step');
    const restartBtn = document.querySelector('.restart');
    const recommendedRoomsContainer = document.querySelector('.recommended-rooms');
    
    let userPreferences = {
        budget: null,
        amenities: []
    };
    
    // Get all unique amenities from rooms
    const allAmenities = [...new Set(rooms.flatMap(room => room.amenities))];
    
    // Populate amenity options
    allAmenities.forEach(amenity => {
        const option = document.createElement('div');
        option.className = 'amenity-option';
        option.innerHTML = `
            <i class="fas fa-${getAmenityIcon(amenity)}"></i>
            <span>${amenity}</span>
        `;
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const amenity = this.querySelector('span').textContent;
            if (this.classList.contains('selected')) {
                userPreferences.amenities.push(amenity);
            } else {
                userPreferences.amenities = userPreferences.amenities.filter(a => a !== amenity);
            }
        });
        amenityOptionsContainer.appendChild(option);
    });
    
    // Budget selection
    budgetOptions.forEach(option => {
        option.addEventListener('click', function() {
            budgetOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            userPreferences.budget = parseInt(this.dataset.budget);
            goToStep(2);
        });
    });
    
    // Next step button
    nextStepBtn.addEventListener('click', function() {
        if (userPreferences.amenities.length > 0) {
            generateRecommendations();
            goToStep(3);
        } else {
            alert('Please select at least one amenity');
        }
    });
    
    // Restart button
    restartBtn.addEventListener('click', function() {
        userPreferences = {
            budget: null,
            amenities: []
        };
        document.querySelectorAll('.amenity-option.selected').forEach(opt => {
            opt.classList.remove('selected');
        });
        goToStep(1);
    });
    
    // Generate recommendations
    function generateRecommendations() {
        recommendedRoomsContainer.innerHTML = '';
        
        // Simple AI recommendation algorithm
        const recommendedRooms = rooms
            .filter(room => room.price <= userPreferences.budget + 100) // Within budget range
            .sort((a, b) => {
                // Score based on matching amenities
                const aScore = a.amenities.filter(a => userPreferences.amenities.includes(a)).length;
                const bScore = b.amenities.filter(a => userPreferences.amenities.includes(a)).length;
                return bScore - aScore || a.price - b.price; // Sort by score then price
            })
            .slice(0, 3); // Top 3 recommendations
        
        if (recommendedRooms.length === 0) {
            recommendedRoomsContainer.innerHTML = '<p>No rooms match your criteria. Try adjusting your preferences.</p>';
            return;
        }
        
        recommendedRooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'recommended-room';
            roomCard.innerHTML = `
                <img src="${room.image}" alt="${room.name}">
                <div class="recommended-room-info">
                    <h4>${room.name}</h4>
                    <p>₹${room.price} / night</p>
                    <p>${room.description}</p>
                    <button class="btn btn-primary" onclick="showBookingForm(${room.id})">
                        Book Now
                    </button>
                </div>
            `;
            recommendedRoomsContainer.appendChild(roomCard);
        });
    }
    
    // Helper function to navigate between steps
    function goToStep(step) {
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');
    }
});// AI Room Recommendation Feature
document.addEventListener('DOMContentLoaded', function() {
    const recommendationForm = document.querySelector('.recommendation-form');
    const budgetOptions = document.querySelectorAll('.budget-option');
    const amenityOptionsContainer = document.querySelector('.amenity-options');
    const nextStepBtn = document.querySelector('.next-step');
    const restartBtn = document.querySelector('.restart');
    const recommendedRoomsContainer = document.querySelector('.recommended-rooms');
    
    let userPreferences = {
        budget: null,
        amenities: []
    };
    
    // Get all unique amenities from rooms
    const allAmenities = [...new Set(rooms.flatMap(room => room.amenities))];
    
    // Populate amenity options
    allAmenities.forEach(amenity => {
        const option = document.createElement('div');
        option.className = 'amenity-option';
        option.innerHTML = `
            <i class="fas fa-${getAmenityIcon(amenity)}"></i>
            <span>${amenity}</span>
        `;
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const amenity = this.querySelector('span').textContent;
            if (this.classList.contains('selected')) {
                userPreferences.amenities.push(amenity);
            } else {
                userPreferences.amenities = userPreferences.amenities.filter(a => a !== amenity);
            }
        });
        amenityOptionsContainer.appendChild(option);
    });
    
    // Budget selection
    budgetOptions.forEach(option => {
        option.addEventListener('click', function() {
            budgetOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            userPreferences.budget = parseInt(this.dataset.budget);
            goToStep(2);
        });
    });
    
    // Next step button
    nextStepBtn.addEventListener('click', function() {
        if (userPreferences.amenities.length > 0) {
            generateRecommendations();
            goToStep(3);
        } else {
            alert('Please select at least one amenity');
        }
    });
    
    // Restart button
    restartBtn.addEventListener('click', function() {
        userPreferences = {
            budget: null,
            amenities: []
        };
        document.querySelectorAll('.amenity-option.selected').forEach(opt => {
            opt.classList.remove('selected');
        });
        goToStep(1);
    });
    
    // Generate recommendations
    function generateRecommendations() {
        recommendedRoomsContainer.innerHTML = '';
        
        // Simple AI recommendation algorithm
        const recommendedRooms = rooms
            .filter(room => room.price <= userPreferences.budget + 100) // Within budget range
            .sort((a, b) => {
                // Score based on matching amenities
                const aScore = a.amenities.filter(a => userPreferences.amenities.includes(a)).length;
                const bScore = b.amenities.filter(a => userPreferences.amenities.includes(a)).length;
                return bScore - aScore || a.price - b.price; // Sort by score then price
            })
            .slice(0, 3); // Top 3 recommendations
        
        if (recommendedRooms.length === 0) {
            recommendedRoomsContainer.innerHTML = '<p>No rooms match your criteria. Try adjusting your preferences.</p>';
            return;
        }
        
        recommendedRooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'recommended-room';
            roomCard.innerHTML = `
                <img src="${room.image}" alt="${room.name}">
                <div class="recommended-room-info">
                    <h4>${room.name}</h4>
                    <p>₹${room.price} / night</p>
                    <p>${room.description}</p>
                    <button class="btn btn-primary" onclick="showBookingForm(${room.id})">
                        Book Now
                    </button>
                </div>
            `;
            recommendedRoomsContainer.appendChild(roomCard);
        });
    }
    
    // Helper function to navigate between steps
    function goToStep(step) {
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');
    }
});
document.getElementById('booking-form').addEventListener('submit',async function(e) {
    e.preventDefault();
    
    // Get booking details
    const bookingDetails = {
        name: document.getElementById('booking-name').value,
        email: document.getElementById('booking-email').value,
        phone: document.getElementById('booking-phone').value,
        checkIn: document.getElementById('check-in').value,
        checkOut: document.getElementById('check-out').value,
        roomType: document.getElementById('room-type').value,
        requests: document.getElementById('special-requests').value
    };
   try{

    const response=await
    fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    });
    const result = await response.json();
        
    if (result.success) {
        Swal.fire({
            title: 'Booking Confirmed!',
            text: result.message,
            icon: 'success',
            confirmButtonText: 'Great!'
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: result.message,
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }
} catch (error) {
    Swal.fire({
        title: 'Error!',
        text: 'Failed to process booking. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}
});
// For successful booking
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Booking Confirmed!',
        text: 'Your room has been successfully booked',
        icon: 'success',
        confirmButtonText: 'Great!'
    });
});

// For contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Message Sent!',
        text: 'We will get back to you soon',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});

// For error cases
function showError(message) {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Try Again'
    });
}
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Thank You!',
        text: 'Your review has been submitted',
        icon: 'success',
        confirmButtonText: 'Close'
    });
});
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Subscribed!',
        text: 'You will receive our latest offers',
        icon: 'success',
        confirmButtonText: 'Awesome!'
    });
});
// Virtual Tour Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize 360° viewer (you'll need to implement this or use a library)
    const tourViewer = document.getElementById('tour-viewer');
    
    // Room data
    const rooms = [
        
        
        {
            id: 2,
            name: "Executive Suite",
            image: "https://i.pinimg.com/736x/e7/d0/98/e7d0984291b6f637409154acac4aedbd.jpg",
            description: "Luxurious suite with separate living area",
            price: 8000,
            amenities: ["42\" Smart TV", "Separate living area", "Premium toiletries", "24/7 room service"],
            size: "500 sq ft"
        },
        {
            id: 3,
            name: "Presidential Suite",
            image: "https://i.pinimg.com/736x/52/4b/ab/524bab0b573f8d1bcaf1f41c44e005e0.jpg",
            description: "Ultimate luxury with premium services",
            price: 12000,
            amenities: ["55\" Smart TV", "Private balcony", "Jacuzzi", "Personal butler service"],
            size: "800 sq ft"
        },
        {
            id: 3,
            name: "Presidential Suite",
            image: "https://i.pinimg.com/736x/52/4b/ab/524bab0b573f8d1bcaf1f41c44e005e0.jpg",
            description: "Ultimate luxury with premium services",
            price: 12000,
            amenities: ["55\" Smart TV", "Private balcony", "Jacuzzi", "Personal butler service"],
            size: "800 sq ft"
        }
    ];
    

    let currentRoom = 'deluxe';

    // Room selection
    document.getElementById('room-selector').addEventListener('change', (e) => {
        currentRoom = e.target.value;
        loadRoomTour(currentRoom);
    });

    // Navigation buttons
    document.getElementById('prev-room').addEventListener('click', () => {
        const options = document.getElementById('room-selector').options;
        const currentIndex = Array.from(options).findIndex(opt => opt.value === currentRoom);
        if (currentIndex > 0) {
            document.getElementById('room-selector').value = options[currentIndex - 1].value;
            currentRoom = options[currentIndex - 1].value;
            loadRoomTour(currentRoom);
        }
    });

    document.getElementById('next-room').addEventListener('click', () => {
        const options = document.getElementById('room-selector').options;
        const currentIndex = Array.from(options).findIndex(opt => opt.value === currentRoom);
        if (currentIndex < options.length - 1) {
            document.getElementById('room-selector').value = options[currentIndex + 1].value;
            currentRoom = options[currentIndex + 1].value;
            loadRoomTour(currentRoom);
        }
    });

    // AI Assistant
    document.getElementById('ask-tour').addEventListener('click', askQuestion);
    document.getElementById('tour-question').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') askQuestion();
    });

    function loadRoomTour(roomType) {
        // In a real implementation, you would load the 360° images here
        const room = rooms.find(r => r.name.toLowerCase().includes(roomType));
    if (!room) return;
    
    document.getElementById('tour-room-image').src = room.image;
    document.getElementById('tour-room-name').textContent = room.name;
    document.getElementById('tour-room-desc').textContent = room.description;
    
    const featuresContainer = document.getElementById('tour-room-features');
    featuresContainer.innerHTML = room.amenities.map(amenity => `
        <div class="feature">
            <i class="fas fa-${getAmenityIcon(amenity)}"></i>
            <span>${amenity}</span>
        </div>
    `).join('');
       
    }
    // Call this on page load
document.addEventListener('DOMContentLoaded', () => {
    loadRoomTour('deluxe');

    function askQuestion() {
        const question = document.getElementById('tour-question').value.trim();
        if (!question) return;

        const messages = document.getElementById('tour-messages');
        const userMessage = document.createElement('div');
        userMessage.className = 'ai-message user';
        userMessage.innerHTML = `<p>${question}</p>`;
        messages.appendChild(userMessage);

        // Simulate AI response (in a real app, you would call an API)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'ai-message bot';
            
            let response = "I'm sorry, I couldn't understand your question.";
            const room = rooms[currentRoom];
            
            if (question.toLowerCase().includes('feature') || question.toLowerCase().includes('amenit')) {
                response = `This ${currentRoom} room includes: ${room.features.join(', ')}.`;
            } else if (question.toLowerCase().includes('size') || question.toLowerCase().includes('square')) {
                response = `The ${currentRoom} room is approximately ${getRoomSize(currentRoom)} square feet.`;
            } else if (question.toLowerCase().includes('price') || question.toLowerCase().includes('cost')) {
                response = `The ${currentRoom} room starts at ₹${getRoomPrice(currentRoom)} per night.`;
            }
            
            botMessage.innerHTML = `<p>${response}</p>`;
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);

        document.getElementById('tour-question').value = '';
    }

    function getRoomSize(roomType) {
        const sizes = {
            deluxe: '350',
            executive: '500',
            presidential: '800'
        };
        return sizes[roomType];
    }
    function getAmenityIcon(amenity) {
        const icons = {
            'TV': 'tv',
            'bed': 'bed',
            'bar': 'wine-glass-alt',
            'WiFi': 'wifi',
            'toiletries': 'soap',
            'service': 'concierge-bell',
            'balcony': 'door-open',
            'Jacuzzi': 'hot-tub'
        };
        
        for (const [key, icon] of Object.entries(icons)) {
            if (amenity.toLowerCase().includes(key.toLowerCase())) {
                return icon;
            }
        }
        return 'check-circle';
    }
    

    function getRoomPrice(roomType) {
        const prices = {
            deluxe: '5000',
            executive: '8000',
            presidential: '12000'
        };
        return prices[roomType];
    }
    document.getElementById('room-selector').addEventListener('change', (e) => {
        loadRoomTour(e.target.value);
    });
    // Initialize the tour on page load
document.addEventListener('DOMContentLoaded', () => {
    loadRoomTour('deluxe');
});
    });
});