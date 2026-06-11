const express = require("express");
const router = express.Router();
const { register, login, getProfile, adminLogin } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/admin-login", adminLogin);
router.get("/profile", getProfile);

module.exports = router;
