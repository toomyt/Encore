import { Router } from "express";
import { events } from "../data/events.js";

const router = Router();

router.get("/:id", (req, res) => {
    console.log("Router got id:", req.params.id)
    const eventId = req.params.id
    const event = events.find((e) => e.id === eventId);

    if (!event) {
        return res.status(404).json({ error: "Not Found", message: `No event with id ${eventId}`});
    }

    res.json({ events });
});

router.get("/", (req, res) => {
    const category = req.query.category;
    let result = events; 

    if (category) {
        result = events.filter((e) => e.category.toLowerCase() === category.toLowerCase());
    }

    res.json({ events: result, count: result.length });

});

export default router; 
