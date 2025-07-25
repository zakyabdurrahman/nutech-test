const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const router = require('express').Router();
const AuthController = require('../controllers/authController');
const PublicController = require('../controllers/publicController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');


router.post('/login', AuthController.login);
router.get('/pub/products', PublicController.read);
router.get('/pub/products/:id', PublicController.detail);
router.get('/pub/categories', PublicController.readCats);



router.use(authentication);
router.post('/add-user', authorization, AuthController.register);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);


module.exports = router;