import jwt from "jsonwebtoken";
import config from "../utils/config";
import User from "../schema/User.schema";

export const auth = async(req, res, next) => {
    const token = req.headers.authorization || "";
    if (!token) return res.status(403).send("Unauthorized");

    try {
        const payload = jwt.verify(token, config.SECRET);
        if (!payload) return res.status(403).send("Unauthorized");
        const user = await User.findById(payload.id).select("-password");
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send(error);
    }
};