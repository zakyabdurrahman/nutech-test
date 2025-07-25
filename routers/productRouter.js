const router = require('express').Router();
const ProductController = require('../controllers/productController');
const authorization = require('../middlewares/authorization');
const upload = require('../middlewares/fileUpload');


router.post('/', ProductController.add);
router.get('/', ProductController.read);
router.get('/:id', ProductController.readOne);
router.put('/:id', authorization, ProductController.update);
router.delete('/:id', authorization,ProductController.delete);
router.patch('/:id', authorization, upload.single("image"), ProductController.updateImage);

module.exports = router;