const Feature = require("../models/Feature");

// Create a new feature
const createFeature = async (req, res) => {
  const { title, description } = req.body;
  const image = {
    data: req.file.buffer,
    contentType: req.file.mimetype,
  };
  try {
    const feature = new Feature({ title, description, image });
    await feature.save();
    res.status(201).json({ message: "Feature created successfully", feature });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all features
const getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    const featuresWithImageUrl = features.map((feature) => ({
      ...feature._doc,
      image: `data:${
        feature.image.contentType
      };base64,${feature.image.data.toString("base64")}`,
    }));
    res.status(200).json(featuresWithImageUrl);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a feature by ID
const getFeatureById = async (req, res) => {
  const { id } = req.params;

  try {
    const feature = await Feature.findById(id);
    if (!feature) {
      return res.status(404).json({ message: "Feature not found" });
    }
    res.status(200).json({ feature });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a feature
const updateFeature = async (req, res) => {
  try {
    const featureId = req.params.id;
    const updateData = {
      title: req.body.title,
      description: req.body.description,
    };

    // If a new image is uploaded, update the image path
    if (req.file) {
      updateData.image = req.file.path;
    }

    // Find the feature by ID and update it
    const updatedFeature = await Feature.findByIdAndUpdate(
      featureId,
      updateData,
      { new: true } // Return the updated document
    );

    if (!updatedFeature) {
      return res.status(404).json({ message: "Feature not found" });
    }

    res.status(200).json(updatedFeature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a feature
const deleteFeature = async (req, res) => {
  const { id } = req.params;

  try {
    const feature = await Feature.findByIdAndDelete(id);
    if (!feature) {
      return res.status(404).json({ message: "Feature not found" });
    }
    res.status(200).json({ message: "Feature deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createFeature,
  getAllFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature,
};
