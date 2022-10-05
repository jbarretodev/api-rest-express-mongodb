const express = require("express");
require("dotenv").config();

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		status: "ok",
		message: `Api Running on this url: ${process.env.URL}`,
	});
});

module.exports = router;
