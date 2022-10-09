const authService = require("../services/authService");

const login = async (req, res) => {
	const rs = await authService.login(req.body);

	if (!rs)
		return res
			.status(401)
			.json({ error: true, message: "user not found or wrong credencials" });

	return res.status(200).json(rs);
};

module.exports = {
	login,
};
