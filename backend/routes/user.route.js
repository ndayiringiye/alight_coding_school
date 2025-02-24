import express from "express";
import { userProvision } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", userProvision);


export default router;