const express = require("express");
const router = express.Router();
const followController = require("../controllers/follow");
const check = require("../middlewares/auth");

router.get("/test-follow", followController.testFollow)
router.post("/save", check.auth, followController.save)

module.exports = router;