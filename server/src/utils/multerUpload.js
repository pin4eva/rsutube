import multer from "multer";
import path from "path";

const imageStorage = multer.diskStorage({
    destination: "videos",
    filename: (req, file, cb) => {
        cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`,
        );
    },
});

export const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        // if (!file.originalname.match(/\.(png|jpg)$/)) {
        // 	// upload only png and jpg format
        // 	return cb(new Error("Please upload a Image"));
        // }
        cb(undefined, true);
    },
});

export const videoUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        // if (!file.originalname.match(/\.(png|jpg)$/)) {
        // 	// upload only png and jpg format
        // 	return cb(new Error("Please upload a Image"));
        // }
        cb(undefined, true);
    },
});