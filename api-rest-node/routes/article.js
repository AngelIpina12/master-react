const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/article");

router.get("/test", ArticleController.test);
router.get("/course", ArticleController.course);
router.get("/articles/:last?", ArticleController.get);
router.get("/article/:id", ArticleController.one);
router.post("/create", ArticleController.create);
router.delete("/article/:id", ArticleController.remove);

module.exports = router;

