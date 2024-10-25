const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/article");

router.get("/test", ArticleController.test);
router.get("/course", ArticleController.course);
router.post("/create", ArticleController.create);

module.exports = router;

