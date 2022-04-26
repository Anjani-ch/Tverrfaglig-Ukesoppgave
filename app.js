// Load environment variables
require('dotenv').config();

// Require modules
const express = require('express');
const path = require('path');

// Initialize express app
const app = express();

const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Require express routes
app.use('/', require('./routes/routes.js'));

// Listen for connection on port
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`));