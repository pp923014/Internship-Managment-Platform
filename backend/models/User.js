const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required: true,
    },
    email:{
      type:String,
      required: true,
    },
    password:{
      type:String,
      required: true,
    },
    isAdmin:{
      type:Boolean,
      default:false,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);


const User= mongoose.model("User", userSchema);
module.exports= User;