const router = require("express").Router();
const s3Controller = require("../../controllers/s3Controller");

router.route("/")
  .post(s3Controller.uploadFile);

// Matches with "/api/flows/:id"
//  

module.exports = router;