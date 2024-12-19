const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const check = require("../middlewares/auth");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/avatars/");
    },
    filename: function (req, file, cb) {
        cb(null, "user-" + Date.now() + "-" + file.originalname);
    }
});

const uploads = multer({storage});

router.get("/test-user", check.auth, userController.testUser)
router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/profile/:id", check.auth, userController.profile)
router.get("/list/:page?", check.auth, userController.list)
router.put("/update", check.auth, userController.update)
router.post("/upload", [check.auth, uploads.single("file0")], userController.upload)
router.get("/avatar/:file", check.auth, userController.avatar)

module.exports = router;