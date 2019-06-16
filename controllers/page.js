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

/**
 * GET /community
 */
exports.getCommunityPage = (req, res) => {
  res.render('community');
};

/**
 * GET /step-one
 */
exports.getStepOnePage = (req, res) => {
  res.render('step-one');
};

/**
 * GET /step-twp
 */
exports.getStepTwoPage = (req, res) => {
  res.render('step-two');
};

/**
 * GET /after-match
 */
exports.getAfterMatchPage = (req, res) => {
  res.render('after-match');
};