const express = require("express");
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");
const {applyInternship,getInterns, updateCertificate,getByCertificate} =require("../controllers/applyInternship");
const { route } = require("./featureRoutes");
const router = express.Router();

router.post("/:id",authMiddleware,applyInternship);
router.get("/",authMiddleware,adminMiddleware,getInterns)
router.put("/cetificte/:id",authMiddleware,adminMiddleware,updateCertificate)
router.get("/intern",authMiddleware,getByCertificate)
module.exports=router;