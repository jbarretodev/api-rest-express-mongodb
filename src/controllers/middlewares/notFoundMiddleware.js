const notFoundRoute = (req, res) => {
	res
		.status(404)
		.json({ error: true, message: `Error. Route: ${req.path} not found` });
};

module.exports = notFoundRoute;
