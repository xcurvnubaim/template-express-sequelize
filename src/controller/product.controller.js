const productServices = require('../service/product.service');

const getProduct = async (req, res) => {
    try {
        const products = await productServices.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = await productServices.create(name, price);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {getProduct, createProduct};