const BalanceController = require('../controllers/balanceController');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();


router.use(authentication);

router.get('/balance', BalanceController.getBalance);
router.post('/topup', BalanceController.addBalance);
router.post('/transaction', BalanceController.buyService);
router.get("/transaction/history", BalanceController.getHistory);

module.exports = router;