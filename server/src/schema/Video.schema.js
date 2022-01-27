import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    view: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    channel: { type: mongoose.Types.ObjectId, required: true, ref: "Channel" },
    video: { type: String, required: true },
}, {
    timestamps: true,
}, );

const Video = mongoose.model("Video", VideoSchema);
export default Video;