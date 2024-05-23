const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Name:{
      type:String,
      required:true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  AccountType: {
    type:String,
    enum:['Admin','Student'],
    required:true,
  },
},{timestamps:true});


module.exports = mongoose.model('User', UserSchema);
