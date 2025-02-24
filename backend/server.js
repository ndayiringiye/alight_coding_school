import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser"
import userRouter from "../backend/models/user.model.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use("/use", userRouter);
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT, async () => {
    await connectDB();
    console.log(`server running on port ${PORT}`);
})