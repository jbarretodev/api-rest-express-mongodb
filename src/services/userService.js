const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");
const bcrypt = require("bcrypt");
require("dotenv").config();

const saveNewUser = async (dataUser) => {
	const user = new User(dataUser);
	return await user.save();
};

const getOneUser = async (id) => {
	if (!id) return undefined;

	const user = await User.findById(id).exec();

	if (user) return user.populate("profile");

	return undefined;
};

const getAllUser = async () => {
	return await User.find().populate("profile");
};

const deleteUSer = async (id) => {
	return await User.findByIdAndDelete(id);
};

const updateUser = async (id, userData) => {
	return await User.findByIdAndUpdate(id, userData);
};

const setIdProfileToUser = async (profileId, userId) => {
	return await User.findByIdAndUpdate(userId, { profile: profileId });
};

const authUser = async (credencials) => {
	const user = await User.findOne({ email: credencials.email })
		.select("+password")
		.exec();

	if (!user) return null;

	if (!(await bcrypt.compare(credencials.password, user.password))) return null;

	const token = jwt.sign(user.toJSON(), process.env.TOKEN_SECRET, {
		expiresIn: "2h",
	});

	const refreshToken = jwt.sign(user.toJSON(), process.env.TOKEN_SECRET, {
		expiresIn: "7d",
	});

	return {
		tokenType: "Bearer",
		expireAt: dayjs().add(2, "h"),
		token,
		refreshToken,
		user: user.toJSON(),
	};
};

module.exports = {
	saveNewUser,
	getOneUser,
	getAllUser,
	deleteUSer,
	updateUser,
	setIdProfileToUser,
	authUser,
};
