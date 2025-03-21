const Internship = require("../models/Internship");

// Create a new internship
const createInternship = async (req, res) => {
  const { title, description } = req.body;
  const image = {
    data: req.file.buffer,
    contentType: req.file.mimetype,
  };
  try {
    const internship=new Internship({title,description,image});
    await internship.save();
    res.status(201).json({ message: "Internship created successfully", internship });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
 
// Get all internships
const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    const internshipWithImageUrl=internships.map((internship)=>({
      ...internship._doc,
      image:`data:${internship.image.contentType};base64,${internship.image.data.toString('base64')}`,
    }))
    res.status(200).json( internshipWithImageUrl );
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get an internship by ID
const getInternshipById = async (req, res) => {
  const { id } = req.params;

  try {
    const internship = await Internship.findById(id);
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }
    res.status(200).json({ internship });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update an internship
const updateInternship = async (req, res) => {
  try {
    const internshipId=req.params.id;
    const updateData={
      title: req.body.title,
      description: req.body.description
    }
    // If a new image is uploaded, update the image path
    if (req.file) {
      updateData.image = req.file.path;
    }
    const updatedInternship = await Internship.findByIdAndUpdate(
          internshipId,
          updateData,
          { new: true } // Return the updated document
        );
    if(!updateInternship){
      return res.status(404).json({ message: 'Internship not found' })
    }
    res.status(200).json(updateInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an internship
const deleteInternship = async (req, res) => {
  const { id } = req.params;

  try {
    const internship = await Internship.findByIdAndDelete(id);
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }
    res.status(200).json({ message: "Internship deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
};