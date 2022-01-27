import { Router } from "express";
import User from "../schema/User.schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../utils/config";
import { auth } from "../middleware/auth";

const router = Router();

// Get Authenticated User
router.get("/me", auth, async(req, res) => {
    res.send(req.user);
});

// Register Route
router.post("/register", async(req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(501).send("Email already registered");
        user = await User.create({
            ...req.body,
            password: bcrypt.hashSync(password, 10),
        });
        return res.send({ message: "Success", data: user.id });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Login Route
router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(404).send("User record not found");
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(403).send("Email or Password not correct");

        const token = jwt.sign({ id: user._id }, config.SECRET);
        return res.send({
            success: true,
            token,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;