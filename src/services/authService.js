const userService = require("../services/userService");
const TokenRevoked = require("../models/TokenRevoked");

const login = async (credencials) => {
	return await userService.authUser(credencials);
};

const revokeToken = async (token) => {
	const tokenRevoked = new TokenRevoked({ token });
	return await tokenRevoked.save();
};

const checkTokenRevoked = async (token) => {
	return await TokenRevoked.findOne({ token });
};

module.exports = {
	login,
	revokeToken,
	checkTokenRevoked,
};
