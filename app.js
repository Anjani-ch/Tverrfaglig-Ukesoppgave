require('dotenv').config();

// Require modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');

// Require configs
const initPassport = require('./config/passport.js');
const connectToDB = require('./config/db.js');

// Initialize express app
const app = express();

const PORT = process.env.PORT || 3000;

// Connect to DB
(async _ => {
    try {
        await connectToDB(process.env.MONGO_URI);

        initPassport(passport);

        // Listen for connection on port
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
    } catch (err) {
        console.log('INIT ERROR')
        console.log(err);
    }
})();

// Set view engine
app.set('view engine', 'ejs');

// Middleware
// Initialize body-parser
app.use(express.urlencoded({ extended: true }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup server session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Initialize passport module and passport session
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Setup server variables for template
app.use((req, res, next) => {
    // Custom flash messages
    res.locals.successMsg = req.flash('successMsg');
    res.locals.errorMsg = req.flash('errorMsg');

    // Passport flash message
    res.locals.error = req.flash('error');

    // Save user in session as variable
    res.locals.user = req.user;

    next();
});

// Require express routes
app.use('/', require('./routes/routes.js'));