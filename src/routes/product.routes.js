const router = require('express').Router();
const productController = require('../controller/product.controller');

router.get('/', productController.getProduct);
router.post('/', productController.createProduct);
module.exports = router;