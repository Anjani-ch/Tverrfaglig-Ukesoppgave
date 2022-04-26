// Require modules
const passport = require('passport');
const emailValidator = require('email-validator');

// Require controller methods
const { renderSignup } = require('./viewController.js');
const { hashPassword } = require('./bcryptController.js');

// Require user model
const User = require('../models/User.js');

// @desc   Signup user
// @route  POST /signup
// @access Public
const handleSignup = async (req, res) => {
    const {
        email,
        password,
        confirmPassword
    } = req.body;

    const errors = [];
    const passwordMinChars = 6;

    let duplicateEmail;

    try {
        const userWithEmail = await User.findOne({ email });

        duplicateEmail = userWithEmail;
    } catch (err) {
        console.log(err);
    }

    if (!email || !password || !confirmPassword) errors.push('Please fill all fields');

    if (!emailValidator.validate(email)) errors.push('Invalid email');

    if (duplicateEmail) errors.push('Email already in use');

    if (password !== confirmPassword) errors.push('Passwords not matching');

    if (password.length < passwordMinChars) errors.push(`Password must be minimum ${passwordMinChars} characters long`);

    if (!errors.length) {
        const userData = {
            email,
            password
        };
        
        try {
            const user = new User(userData);

            user.password = await hashPassword(user.password, 10);

            await user.save();

            req.flash('successMsg', 'You are now registered');
            res.status(201).redirect('/login');
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: 'Error creating user' });
        }
    } else {
        renderSignup(req, res, { errors });
    }
};

// @desc   Login user
// @route  POST /login
// @access Public
const handleLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next);
};

// @desc   Logout user
// @route  POST /logout
// @access Private
const handleLogout = (req, res) => {
    req.logout();
    req.flash('successMsg', 'You are logged out');
    res.redirect('/login');
};

module.exports = {
    handleSignup,
    handleLogin,
    handleLogout
};