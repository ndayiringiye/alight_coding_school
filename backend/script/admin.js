import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createAdminAccount = async () => {
    try {
        const existAdmin = await User.findOne({ email: "admin@codingschool.com" });
        if (!existAdmin) {
            const newAdmin = new User({
                firstName: "Admin",
                lastName: "User",
                passward: await bcrypt.hash("Admin", 10),
                email: "admin@codingschool.com",
                role: "admin"
            });
            await newAdmin.save();
            console.log("Admin account created successfully")

        } else {
            console.log("Admin already exist")
        }
    } catch (error) {
        console.log("error creating admin account: ", error.message)
    }
} 