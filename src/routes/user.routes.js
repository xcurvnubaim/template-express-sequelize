const router = require('express').Router();
const userController = require('../controller/user.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me',verifyToken, userController.me);

module.exports = router;