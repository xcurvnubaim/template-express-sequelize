const model = require('../models');

const getAll = async () => {
    return await model.Product.findAll();
}

const createOne = async (name, price) => {
    return await model.Product.create({ name, price });
}

module.exports = {getAll, createOne};