/**
 * GET /
 */
exports.getHomePage = (req, res) => {
  res.render('home');
};

/**
 * GET /court
 */
exports.getCourtPage = (req, res) => {
  res.render('court-info');
};