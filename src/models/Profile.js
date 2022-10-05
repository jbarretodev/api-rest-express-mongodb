const { Schema, model } = require("mongoose");

const profileSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		dateBorn: {
			type: Date,
			required: true,
		},
		user: { type: Schema.Types.ObjectId, ref: "User" },
		address: {
			type: String,
		},
		phone: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Profile", profileSchema);
