// @desc   Render index
// @route  GET /
// @access Public
const renderIndex = (req, res) => {
    res.render('index');
};

// @desc   Render docs
// @route  GET /docs
// @access Public
const renderDocs = (req, res) => {
    res.render('docs');
};

// @desc Render summary
// @route GET /summary
// @access Public
const renderSummary = (req, res) => {
    res.render('summary');
};

// @desc   Render 404
// @route  GET non-exisiting-route
// @access Public
const render404 = (req, res) =>  {
    res.render('404');
};

// Export methods
module.exports = {
    renderIndex,
    renderDocs,
    renderSummary,
    render404
};