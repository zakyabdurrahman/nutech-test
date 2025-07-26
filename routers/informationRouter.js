const router = require('express').Router();
const InformationController = require('../controllers/informationController');

router.get('/banner', InformationController.getBanners);


module.exports = router;