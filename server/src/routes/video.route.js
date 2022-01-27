import { Router } from "express";
import { auth } from "../middleware/auth";
import Video from "../schema/Video.schema";
import { videoUpload } from "../utils/multerUpload";
const router = Router();

// create Video
router.post("/", [auth, videoUpload.single("video")], async(req, res) => {
    const payload = {
        ...req.body,
        video: req.file.path,
    };

    try {
        const video = await Video.create(payload);

        return res.send(video);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Update Video
router.put("/", async(req, res) => {
    try {
        const videos = await Video.findByIdAndUpdate(req.body._id, req.body, {
            new: true,
        });
        res.send(videos);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Get all videos
router.get("/", async(req, res) => {
    try {
        const videos = await Video.find();
        res.send(videos);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Get One Video
router.get("/:id", async(req, res) => {
    try {
        const videos = await Video.findById(req.params.id);
        res.send(videos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete Video
router.get("/:id", async(req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).send("No record found");
        video.remove();
        res.send(video);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;