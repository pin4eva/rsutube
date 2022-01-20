import express from "express";

const app = express();
const PORT = process.env.PORT || 8001;

function startServer() {
    app.listen(PORT, () => console.log(`server started on ${PORT}`));
}

startServer();