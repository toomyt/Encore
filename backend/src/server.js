import express from "express";
import eventsRouter from "./routes/events.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({status: "ok", time: new Date().toISOString() });
});

app.get("/api/hello", (req,res) => {
    const name = req.query.name || "stranger";
    res.json({message: `Hello, ${name}`});
});

app.use("/api/events", eventsRouter);

app.use((req,res) => {
    res.status(404).json({ error: "Not Found", message: "The requested resource does not exist."});
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
});

