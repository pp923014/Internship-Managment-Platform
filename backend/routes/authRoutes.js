const express = require("express");
const { register, login, logout,checkAuth } = require("../controllers/authController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Logout user
router.post("/logout", logout);

// check user 
router.get("/check", authMiddleware, checkAuth);
module.exports = router; 