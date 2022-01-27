import { Router } from "express";
import User from "../schema/User.schema";

const router = Router();

// Get All user
router.get("/", async(req, res) => {
    try {
        const users = await User.find().select("-password");
        return res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Login Route

export default router;