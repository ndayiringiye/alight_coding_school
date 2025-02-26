import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import { createAdminAccount } from "./script/admin.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRouter);
createAdminAccount()
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
});
