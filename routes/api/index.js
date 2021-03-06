const router = require("express").Router();
const flowRoutes = require("./flows");
const posesRoutes = require("./poses");
const studentsRoutes = require("./students");
const teachersRoutes = require("./teachers");
const s3routes = require("./s3routes");
const flowsPosesRoutes = require("./flowsPoses");


// our routes
router.use("/flows", flowRoutes);
router.use("/s3", s3routes);
router.use("/poses", posesRoutes);
router.use("/students", studentsRoutes);
router.use("/teachers", teachersRoutes);
router.use("/flowsposes", flowsPosesRoutes);

module.exports = router;
