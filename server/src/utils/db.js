import mongoose from "mongoose";
import config from "./config";

let cachedDB = null;
export const connectDB = async() => {
    if (cachedDB) return cachedDB;
    try {
        const db = await mongoose.connect(config.MONGO_URI);
        cachedDB = db;
        console.log(`db connected: ${db.connection.host}`);
        return db;
    } catch (error) {
        console.log(error.message);

        process.exit(1);
    }
};