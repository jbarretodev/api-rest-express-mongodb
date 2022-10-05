const profileService = require("../services/profileService");

const newProfile = async (req, res) => {
	const rs = await profileService.saveNewProfile(req.body);

	if (rs) return res.status(201).json(rs);

	return res.status(400).json({ error: true, message: "error try later" });
};

module.exports = {
	newProfile,
};
