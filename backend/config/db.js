import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING

export const connectDb = async (req , res) =>{
    try {
        await mongoose.connect()
        console.log("database connected")
    } catch (error) {
        console.log("connection failed")
    }
}