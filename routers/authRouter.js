const router = require('express').Router();
const AuthController = require('../controllers/authController.js');
const authentication = require('../middlewares/authentication.js');


router.post('/register', AuthController.register);
router.use(authentication);
router.post('/login', AuthController.login);
router.get('/profile', AuthController.getProfile);
router.put('/profile/update', AuthController.setProfile);

module.exports = router;