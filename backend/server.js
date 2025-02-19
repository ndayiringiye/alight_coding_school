import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT, async () => {
    await connectDB();
    console.log(`server running on port ${PORT}`);
})