const userService = require('../service/user.service');

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.create(email, password);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userService.login(email, password);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const me = async (req, res) => {
    return res.status(200).json(req.user);
}

module.exports = { register, login, me };