const router = require('express').Router();
const InformationController = require('../controllers/informationController');
const authentication = require('../middlewares/authentication');

router.get('/banner', InformationController.getBanners);
router.get('/services', authentication, InformationController.getServices);

module.exports = router;