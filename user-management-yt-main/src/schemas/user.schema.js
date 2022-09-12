import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new Schema({
  name:{
    tpye:String,
    required:true,
    minLength: 2,
    maxLenght:20,
  },
  surname:{
    tpye:String,
    required:true,
    minLength: 4,
    maxLenght:50,
  },
  email:{
    tpye:String,
    required:true,
  },
  password:{
    tpye:String,
    required:true,
  }
});

const userModel = model("User",userSchema);

export default userModel; 


