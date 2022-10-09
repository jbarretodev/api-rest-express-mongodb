const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

const tokenRevoked = new Schema(
	{
		token: {
			required: true,
			type: String,
		},
		date: {
			required: true,
			type: Date,
			default: dayjs().format("YYYY-MM-DD"),
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("TokenRevoked", tokenRevoked);
