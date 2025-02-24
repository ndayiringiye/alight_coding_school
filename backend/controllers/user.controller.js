import { createServiceUser } from "../services/user.service.js";


export const userProvision = async (req ,res) =>{
    try {
        const userData = req.body;
        const user = await createServiceUser(userData);
        res.status(201).json({success:true, user:user ,message:"user created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "create user failed" });
    }
};