const userRepository = require('../repository/user.repository');
const bcrypt = require('bcrypt');   
const jwt = require('jsonwebtoken');

const create = async (email, password) => {
    const user = await userRepository.findOneByEmail(email);
    if (user) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.create(email, hashedPassword);
}

const login = async (email, password) => {
    const user = await userRepository.findOneByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Incorrect password');
    }
    const payload = {
        id: user.user_id,
        role: user.role
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' });
    const data = {
        user,
        token
    }
    return data;
}

module.exports = { create, login };