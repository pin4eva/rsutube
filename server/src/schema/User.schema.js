import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    image: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
});

const User = mongoose.model("User", UserSchema);
export default User;