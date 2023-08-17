import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  gender: { type: String },
  weigth: { type: String },
  heigth: { type: String },
  onboarded: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
