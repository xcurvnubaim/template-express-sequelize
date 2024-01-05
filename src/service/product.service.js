const productRepository = require('../repository/product.repository');

const getAll = async () => {
    return await productRepository.getAll();
}

const create = async (name, price) => {
    return await productRepository.createOne(name, price);
}

module.exports = {getAll, create};