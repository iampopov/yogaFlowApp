const router = require("express").Router();
const s3Controller = require("../../controllers/s3Controller");

const fileUpload = require("express-fileupload");
router.use(fileUpload());


router.route("/")
  .post(s3Controller.uploadFile);

// Matches with "/api/flows/:id"
//  

module.exports = router;