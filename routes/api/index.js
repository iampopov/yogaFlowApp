const router = require("express").Router();
const flowRoutes = require("./flows");

// Book routes
router.use("/flows", flowRoutes);

module.exports = router;
