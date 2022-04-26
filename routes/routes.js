// Require router
const { Router } = require('express');

// Require controller methods
const {
    renderIndex,
    renderDocs,
    renderSummary,
    render404
} = require('../controllers/viewController.js');

// Initialize router
const router = new Router();

// Render index view
router.get('/', renderIndex);

// Render docs
router.get('/docs', renderDocs);

// Render summary
router.get('/summary', renderSummary);

// Handle 404
router.use((req, res) => render404(req, res));

// Export router
module.exports = router;