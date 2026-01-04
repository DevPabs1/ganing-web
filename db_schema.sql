-- Database Schema for Ganing Website content

-- Projects Table
CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    year INT,
    description TEXT,
    thumbnail_url VARCHAR(500),
    page_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services Table
CREATE TABLE Services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Galleries Table
CREATE TABLE Galleries (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cover_image_url VARCHAR(500),
    link_url VARCHAR(500)
);

-- Inquiries/Contact Table
CREATE TABLE Inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Mock Data
INSERT INTO Services (name, description) VALUES
('Architectural Photography', 'Capturing the interplay of light, shadow, and structure.'),
('Interior Design Photography', 'Showcasing interior spaces with emotional depth and detail.'),
('Commercial & Establishment Photography', 'Professional imagery for businesses and establishments.');

INSERT INTO Galleries (title, cover_image_url, link_url) VALUES
('Madame Nature', '/images/nature.jpg', '/madame-nature'),
('What I See on the Street', '/images/street.jpg', '/what-i-see-on-the-street'),
('Beautiful People', '/images/people.jpg', '/beautiful-people'),
('Shapes & Structures', '/images/shapes.jpg', '/shapes-structures');
