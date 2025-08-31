import { mongoose, Types } from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: false,
    required: true,
    
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: {
      values:['Pending', 'Cancelled', 'complete'],
      message:`{values}not present in validation part`
    },
    
  },
  city: {
    type: String,
    lowercase: true,
  },
  date: {
    
    // default: () => new Date(Date.now() + 24*60*60*1000) 
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})


export const User3 = new mongoose.model("ren3", userSchema)