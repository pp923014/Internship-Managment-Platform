const mongoose =require("mongoose") ;

const ApplySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // This will store the user's ID
      ref: "User", // This references the User model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    internshipType: {
      type: String,
      required: true,
    },
    internshipDuration: {
      type: String,
      required: true,
    },
    certificate: {
      type: String, // This will store the certificate URL or file path
      unique: true,
      default:null,
       // Initially, no certificate is assigned
    },
  },
  { timestamps: true }
);

const Apply = mongoose.model("Apply", ApplySchema);

module.exports=Apply;