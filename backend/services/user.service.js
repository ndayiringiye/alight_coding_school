import bcrypt from "bcrypt";
import user from "../models/user.model.js"


export const createServiceUser = async (userData) => {
    const { firstName, lastName, email, password } = userData;
    const dataHashed = await bcrypt.hash(password, 10)
    const createNewUser = new  user({
        firstName,
        lastName,
        email,
        password: dataHashed,
    });
    const savingUser = await createNewUser.save();
    return savingUser;
}