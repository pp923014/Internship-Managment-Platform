const express = require("express");
const authRoutes = require("./authRoutes");
const featureRoutes = require("./featureRoutes");
const internshipRoutes = require("./internshipRoutes");
const certificateRoutes = require("./certificateRoutes");
const applyIntern=require('./applyInternsRoutes');
const router = express.Router();

// Use all routes
router.use("/auth", authRoutes);
router.use("/features", featureRoutes);
router.use("/internships", internshipRoutes);
router.use("/apply",applyIntern)
module.exports = router;