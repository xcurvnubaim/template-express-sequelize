const model = require('../models');

const create = async (email, password) => {
    return await model.User.create({ email, password });
}

const findOneByEmail = async (email) => {
    return await model.User.findOne({ where: { email } });
}

module.exports = { create, findOneByEmail };