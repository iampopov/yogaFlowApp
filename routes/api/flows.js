const router = require("express").Router();
const flowsController = require("../../controllers/flowsController");

// Matches with "/api/books"
router.route("/")
  .get(flowsController.findAll)
  .post(flowsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(flowsController.findById)
  .put(flowsController.update)
  .delete(flowsController.remove);

module.exports = router;
