const express = require("express");
const multer = require("multer");
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/articles/");
    },
    filename: (req, file, cb) => {
        cb(null, "article-" + Date.now() + "-" + file.originalname);
    }
});
const uploads = multer({ storage });
const ArticleController = require("../controllers/article");

router.get("/test", ArticleController.test);
router.get("/course", ArticleController.course);
router.get("/articles/:last?", ArticleController.get);
router.get("/article/:id", ArticleController.one);
router.post("/create", ArticleController.create);
router.delete("/article/:id", ArticleController.remove);
router.put("/article/:id", ArticleController.update);
router.post("/upload-image/:id?", uploads.single("file0"), ArticleController.upload);
router.get("/image/:file", ArticleController.image);
module.exports = router;

