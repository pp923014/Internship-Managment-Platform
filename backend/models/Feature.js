const mongoose = require("mongoose");

const featureSchema = mongoose.Schema(
  {
  title:{
    type:String,
    required:true,
  },
  description: {
    type:String,
    required:true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  },
  { timestamps: true }
);

 const Feature = mongoose.model("Feature", featureSchema);
 module.exports=Feature;