var multer = require("multer");
var fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (
      file.fieldname === "file_image" ||
      file.fieldname === "icon" ||
      file.fieldname === "deal_image" ||
      file.fieldname === "image"
    ) {
      if (!fs.existsSync(process.env.UPLOAD_DIR)) {
        fs.mkdirSync(process.env.UPLOAD_DIR);
      }
      cb(null, `./${process.env.UPLOAD_DIR}`);
    } else {
      let path = "";
      return path;
    }
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + `${file.originalname}`.split(" ").join("_"));
  },
});

exports.upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.fieldname === "file_image" ||
      file.fieldname === "icon" ||
      file.fieldname === "deal_image" ||
      file.fieldname === "image"
    ) {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/svg" ||
        file.mimetype === "image/svg+xml" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/gif" ||
        file.mimetype === "image/webp"
      ) {
        cb(null, true);
      } else {
        return cb(null, false);
      }
    }
    if (file.fieldname === "deal_image") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/svg" ||
        file.mimetype === "image/svg+xml" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        return cb(null, false);
      }
    }
  },
});
