import { Router } from "express";
import { auth } from "../middleware/auth";
import Channel from "../schema/Channel.schema";
const router = Router();

// Create Channel
router.post("/", auth, async(req, res) => {
    const user = req.user;
    try {
        const channel = await Channel.create({...req.body, owner: user._id });
        res.send(channel);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Get all Channel
router.get("/", async(req, res) => {
    try {
        const channels = await Channel.find();
        res.send(channels);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Get Single Channel
router.get("/:id", async(req, res) => {
    try {
        const channel = await Channel.findById(req.params.id);
        res.send(channel);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Delete Channel
router.delete("/:id", auth, async(req, res) => {
    try {
        const channel = await Channel.findById(req.params.id);
        if (!channel) return res.status(404).send("No record found");
        res.send(channel);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Update Channel
router.put("/", auth, async(req, res) => {
    try {
        const channel = await Channel.findByIdAndUpdate(req.body._id, req.body, {
            new: true,
        });
        return res.send(channel);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;