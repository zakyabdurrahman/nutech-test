const multer = require("multer");
const path = require("path");
const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public")); // Save in 'public/' folder
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now();
    
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, file.originalname.slice(0, file.originalname.lastIndexOf('.')) + "-" + uniqueName + ext);
  },
});

// File filter for validating image extensions
const fileFilter = function (req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Format Image tidak sesuai'));
  }
};

const upload = multer({storage: storage, fileFilter:fileFilter});

module.exports = upload;