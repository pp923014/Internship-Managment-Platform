const mongoose = require("mongoose");
const { type } = require("os");

const internshipSchema = mongoose.Schema(
  {
   title:{
    type:String,
    required: true,
  },
  description:{
    type:String,
    required:true,
  },
   image:{
    data:Buffer,
    contentType: String,
   }
  },
  { timestamps: true }
);
const Internship =mongoose.model("Internship", internshipSchema);
module.exports = Internship;