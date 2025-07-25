const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const fileUpload = upload.single('image');

module.exports = upload;