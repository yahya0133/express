const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send('Service is currently unavailable. Please try during working hours (Monday to Friday, from 9 AM to 5 PM).');
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><p>Welcome to our website!</p>');
});

app.get('/services', (req, res) => {
    res.send('<h1>Our Services</h1><p>Learn about our various services.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>We are here to help you. Get in touch with us!</p>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
