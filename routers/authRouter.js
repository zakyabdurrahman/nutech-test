const router = require('express').Router();
const AuthController = require('../controllers/authController.js');

router.post('/register', AuthController.register);

module.exports = router;