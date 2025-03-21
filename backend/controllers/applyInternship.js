const Apply=require('../models/ApplyInternship');

const applyInternship=async(req,res)=>{
    const userId=req.params.id;
    const{name,email,contactNo,internshipType,internshipDuration}=req.body;
    try {
        if(!name || !email ||!contactNo || !internshipType || !internshipDuration){
            return res.status(400).json({ message: "All fields are required!" });
        }
        const intern=new Apply({
           userId, name,email,contactNo,internshipType,internshipDuration
        })
       await intern.save();
       res.status(201).json({ message: "Applied  successfully", intern });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const getInterns=async(req,res)=>{
    try {
        const intern=await Apply.find();
        res.status(200).json({ intern });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
const updateCertificate=async(req,res)=>{
    try {
        const id=req.params.id;
        const updateData = {
            certificate: req.body.certificate, 
          };
          const update=await Apply.findByIdAndUpdate(id,updateData,
            {new:true}
          );
          if(!update){
            return res.status(404).json({ message: 'Update not found' });
          }
          res.status(200).json(update);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getByCertificate = async (req, res) => {
try {
    const { certificate } = req.query; // Extract certificate number from query parameters

    // Check if certificate number is provided
    if (!certificate) {
        return res.status(400).json({ message: "Certificate number is required!" });
    }

    // Find the document with the matching certificate number
    const intern = await Apply.findOne({ certificate });

    // If no document is found, return a 404 error
    if (!intern) {
        return res.status(404).json({ message: "No intern found with the given certificate number" });
    }

    // Return the found document
    res.status(200).json({ intern });
} catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
}
}
module.exports={applyInternship,getInterns,updateCertificate,getByCertificate};