const Profile = require("../models/Profile");
const { setIdProfileToUser } = require("../services/userService");

const saveNewProfile = async (dataProfile) => {
	const newProfile = new Profile(dataProfile);
	await newProfile.save();
	await setIdProfileToUser(newProfile._id, dataProfile.user);

	return newProfile;
};

module.exports = {
	saveNewProfile,
};
