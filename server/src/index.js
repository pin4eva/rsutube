import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import channelRoutes from "./routes/channel.route";
import videoRoutes from "./routes/video.route";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome");
});
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/channel", channelRoutes);
app.use("/video", videoRoutes);

const startServer = async() => {
    await connectDB();
    app.listen(PORT, () => console.log(`server started on ${PORT}`));
};

startServer();