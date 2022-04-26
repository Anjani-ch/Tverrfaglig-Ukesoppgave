// Require router
const { Router } = require('express');

// Require controller methods
const {
    renderIndex,
    renderDocs,
    renderSummary,
    renderLogin,
    renderSignup,
    renderSecret,
    render404
} = require('../controllers/viewController.js');

const {
    handleSignup,
    handleLogin,
    handleLogout
} = require('../controllers/authController.js');

// Require auth middleware
const { isLoggedIn, isLoggedOut} = require('../middleware/auth.js');

// Initialize router
const router = new Router();

// Render index view
router.get('/', (req, res) => renderIndex(req, res));

// Render docs
router.get('/docs', renderDocs);

// Render summary
router.get('/summary', renderSummary);

// Render secret view
router.get('/secret', isLoggedIn, (req, res) => renderSecret(req, res));

// Render login view
router.get('/login', isLoggedOut, (req, res) => renderLogin(req, res));

// Render signup view
router.get('/signup', isLoggedOut, (req, res) => renderSignup(req, res));

// Handle Signup action
router.post('/signup', isLoggedOut, handleSignup);

// Handle login action
router.post('/login', isLoggedOut, handleLogin);

// Handle logout action
router.post('/logout', isLoggedIn, handleLogout);

// Handle 404 not found
router.use((req, res) => render404(req, res));

// Export router
module.exports = router;