const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");
const passport = require("../../config/passport")

// Matches with "/api/students"
router.route("/")
  .get(studentsController.findAll)
  .post(studentsController.create)

// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

router.route("/login").post(passport.authenticate("local"),studentsController.authenticate)

module.exports = router;
