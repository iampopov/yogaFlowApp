const router = require("express").Router();
const flowRoutes = require("./flows");
const posesRoutes = require("./poses");
const studentsRoutes = require("./students");
// const teachersRoutes = require("./teachers");


// our routes
router.use("/flows", flowRoutes);
router.use("/poses", posesRoutes);
router.use("/students", studentsRoutes);
// router.use("/teachers", teachersRoutes);

module.exports = router;
