import express from "express";
import weather from "../models/weather.js";
const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const data = new weather(req.body);
    await data.save();
    res.status(201).json({ message: "Weather saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save weather" });
  }
});

router.get("/saved", async (req, res) => {
  const all = await weather.find();
  res.json(all);
});

export default router;