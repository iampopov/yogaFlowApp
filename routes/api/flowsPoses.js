const router = require("express").Router();
const flowsPosesController = require("../../controllers/flowsPosesController");

router.route("/")
//   .get(flowsPosesController.findAll)
  .post(flowsPosesController.bulkCreate);



module.exports = router;
