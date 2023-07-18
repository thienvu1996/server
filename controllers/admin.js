import UserModel from "../model/User.model.js";

export  async function getCustomers(req, res) {
    try {
        const users = await UserModel.find({roleId : '1'}).select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export  async function getMentors(req, res) {
    try {
        const users = await UserModel.find({roleId : '2'}).select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export  async function getStaffs(req, res) {
    try {
        const users = await UserModel.find({roleId : '3'}).select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export  async function getAdmins(req, res) {
    try {
        const users = await UserModel.find({roleId : '4'}).select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}