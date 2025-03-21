const express = require("express");
const multer=require('multer')
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");
const {
  createFeature,
  getAllFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature,
} = require("../controllers/featureController");
const router = express.Router();
const upload=multer()
// // Create a new feature (Admin only)
router.post("/",upload.single("image"), authMiddleware, adminMiddleware, createFeature);

// Get all features
router.get("/", getAllFeatures);

// Get a feature by ID
router.get("/:id", getFeatureById);

// Update a feature (Admin only)
router.put("/:id", authMiddleware, adminMiddleware, upload.single("image"),updateFeature);

// Delete a feature (Admin only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteFeature);

module.exports = router;