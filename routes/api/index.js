const router = require("express").Router();
const flowRoutes = require("./flows");
const posesRoutes = require("./poses")

// Book routes
router.use("/flows", flowRoutes);
router.use("/poses", posesRoutes);

module.exports = router;
