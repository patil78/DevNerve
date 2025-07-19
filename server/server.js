import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", weatherRoutes);

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/devnerve";
mongoose.connect(MONGO_URL).then(() => {
  console.log("MongoDB connected ✅");
}).catch(err => {
  console.error("MongoDB connection error ❌", err);
});

app.listen(5000, ()=>{
    console.log("server is listening to the port 5000");
})
