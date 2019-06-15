const querystring = require('querystring');

exports.getHome = (req, res) => {
  res.render('home');
};

exports.postHome = (req, res) => {
	const query = req.body;
  const q = querystring.stringify({
    "location": query.location,
    "date": query.date,
    "time": query.time,
    "duration": query.duration,
  });
	res.redirect('/field?' + q);
}