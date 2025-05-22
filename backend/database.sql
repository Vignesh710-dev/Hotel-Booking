CREATE DATABASE hotel_booking;
USE hotel_booking;

CREATE TABLE rooms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    amenities JSON
);

CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    room_id INT,
    guest_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    special_requests TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (room_id) REFERENCES rooms(id)
);

ALTER TABLE bookings
ADD COLUMN guests INT AFTER check_out,
ADD COLUMN total_price DECIMAL(10,2) AFTER guests;

-- Clear existing rooms data
TRUNCATE TABLE rooms;

-- Insert all rooms
INSERT INTO rooms (name, description, price, image_url, amenities) VALUES
('Aiswary Kings Inn', 'Spacious room with king-size bed', 150.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500', '["WiFi", "TV", "AC", "Mini-bar"]'),
('JBR Residency', 'Luxury suite with separate living area', 250.00, 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500', '["WiFi", "TV", "AC", "Mini-bar", "Jacuzzi"]'),
('Hotel Grish Park', 'Perfect for families with connecting rooms', 300.00, 'https://i.pinimg.com/736x/52/4b/ab/524bab0b573f8d1bcaf1f41c44e005e0.jpg', '["WiFi", "TV", "AC", "Kitchenette", "Crib"]'),
('Starwin Residency', 'Stunning ocean views from your private balcony', 350.00, 'https://i.pinimg.com/736x/e7/d0/98/e7d0984291b6f637409154acac4aedbd.jpg', '["WiFi", "TV", "AC", "Balcony", "Sea View", "Lounge"]'),
('Kifa Residency', 'Ultimate luxury with premium services', 500.00, 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500', '["WiFi", "TV", "AC", "Jacuzzi", "Butler", "Lounge"]'),
('Coral Residency', 'Romantic getaway with special amenities', 400.00, 'https://i.pinimg.com/736x/9e/37/13/9e3713a2136a05bd71fe58e13206c8b4.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]'),
('SSK Green Place', 'Romantic getaway with special amenities', 400.00, 'https://i.pinimg.com/736x/f6/bf/2e/f6bf2ead8546606c5da8094f461b7299.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]'),
('SSK Malligai', 'Romantic getaway with special amenities', 1600.00, 'https://i.pinimg.com/736x/7a/48/00/7a48002fe44af3fae153331ba65ec569.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]'),
('Ibrizz Park', 'Romantic getaway with special amenities', 1600.00, 'https://i.pinimg.com/736x/7a/48/00/7a48002fe44af3fae153331ba65ec569.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]'),
('Viceroy Residency Manor', 'Romantic getaway with special amenities', 1600.00, 'https://i.pinimg.com/736x/1d/a4/1c/1da41ce54743dd994c28996dae941644.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]'),
('Faiz Residency', 'Romantic getaway with special amenities', 1600.00, 'https://i.pinimg.com/736x/e5/45/5f/e5455ff7da2863a8286f452969055f57.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]'),
('Riya Residency', 'Romantic getaway with special amenities', 1600.00, 'https://i.pinimg.com/736x/37/a6/54/37a6543706272040bc763fee7a7f7e03.jpg', '["WiFi", "TV", "AC", "Champagne", "Flowers", "Spa Access"]');