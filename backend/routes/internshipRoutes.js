const express = require("express");
const multer=require('multer');
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");
const {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} = require("../controllers/internshipController");
const upload = multer();
const router = express.Router();

// Create a new internship (Admin only)
router.post("/", upload.single("image"),authMiddleware, adminMiddleware, createInternship);

// Get all internships
router.get("/", getAllInternships);

// Get an internship by ID
router.get("/:id", getInternshipById);

// Update an internship (Admin only)
router.put("/:id", authMiddleware, adminMiddleware,upload.single("image"), updateInternship);

// Delete an internship (Admin only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteInternship);

module.exports = router;