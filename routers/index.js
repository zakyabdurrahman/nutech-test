const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const InformationController = require('../controllers/informationController.js');



/*
router.post('/login', AuthController.login);
router.get('/pub/products', PublicController.read);
router.get('/pub/products/:id', PublicController.detail);
router.get('/pub/categories', PublicController.readCats);
*/

router.get("/banner", InformationController.getBanners);


router.use(authentication);
/*
router.post('/add-user', authorization, AuthController.register);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
*/

module.exports = router;