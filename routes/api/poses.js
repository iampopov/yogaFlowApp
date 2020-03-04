const router = require("express").Router();
const posesController = require("../../controllers/posesController");

// Matches with "/api/flows"
router.route("/")
  .get(posesController.findAll)
  .post(posesController.create)

// Matches with "/api/flows/:id"
router
  .route("/:id")
  .get(posesController.findById)
  .put(posesController.update)
  .delete(posesController.remove);

module.exports = router;
