import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subscribers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    videos: [{ type: mongoose.Types.ObjectId, ref: "Video" }],
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Channel = mongoose.model("Channel", ChannelSchema);
export default Channel;