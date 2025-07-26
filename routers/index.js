const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const informationRouter = require('./informationRouter');
const authRouter = require('./authRouter');


/*

router.get('/pub/products/:id', PublicController.detail);
*/

router.use('', informationRouter);
router.use('', authRouter);


router.use(authentication);
/*
router.post('/add-user', authorization, AuthController.register);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
*/

module.exports = router;