const userService = require("../services/userService");

const login = async (credencials) => {
	return await userService.authUser(credencials);
};

module.exports = {
	login,
};
