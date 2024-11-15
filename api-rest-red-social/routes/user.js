const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/test-user", userController.testUser)

module.exports = router;