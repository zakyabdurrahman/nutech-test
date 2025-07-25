const router = require('express').Router();
const CategoryController = require('../controllers/categoryController')

router.post('/', CategoryController.add);
router.get('/', CategoryController.read);
router.put('/:id', CategoryController.edit);
router.delete('/:id', CategoryController.delete);

module.exports = router;