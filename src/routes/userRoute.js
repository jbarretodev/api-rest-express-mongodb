const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticationMiddleware = require("../controllers/middlewares/authMiddleware");

router
	.get("/", userController.getAllUsers)
	.get("/:userId", userController.getOneUser)
	.post("/", userController.saveNewUser)
	.delete("/:userId", userController.deleteUser)
	.put("/:userId", userController.updateUser);

module.exports = router;
