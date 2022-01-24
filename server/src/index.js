import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome");
});

function startServer() {
    app.listen(PORT, () => console.log(`server started on ${PORT}`));
}

startServer();