// @desc   Render index
// @route  GET /
// @access Public
const renderIndex = (req, res, additionalProperties) => {
    if(!additionalProperties) {
        additionalProperties = {};
    }
    res.render('index', additionalProperties);
};

// @desc   Render login
// @route  GET /login
// @access Public
const renderLogin = (req, res, additionalProperties) => {
    if(!additionalProperties) {
        additionalProperties = {};
    }
    res.render('login', additionalProperties);
};

// @desc   Render signup
// @route  GET /signup
// @access Public
const renderSignup = (req, res, additionalProperties) => {
    if(!additionalProperties) {
        additionalProperties = {};
    }
    res.render('signup', additionalProperties);
};

// @desc   Render secret
// @route  GET /secret
// @access Private
const renderSecret = (req, res, additionalProperties) => {
    if(!additionalProperties) {
        additionalProperties = {};
    }
    res.render('secret', additionalProperties);
};

// @desc   Render 404
// @route  GET non-exisiting-route
// @access Public
const render404 = (req, res, additionalProperties) => {
    if(!additionalProperties) {
        additionalProperties = {};
    }
    res.render('404', additionalProperties);
};

module.exports = {
    renderIndex,
    renderLogin,
    renderSignup,
    renderSecret,
    render404
};