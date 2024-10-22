import mongoose, { Schema } from "mongoose"


const userSchema = new Schema({
  username: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTykU2BZtuaSIFXvPHnTJsaL-Z3NgRvA2sA&s'
  }

}, { timestamps: true });

export default mongoose.model('User', userSchema);
