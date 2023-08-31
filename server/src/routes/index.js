const { Router } = require("express");
const countryRoutes  = require ('./countryRoutes')
const activityRoutes = require ('./activityRoute')

const router = Router();

router.use("/countries", countryRoutes);
router.use("/activities", activityRoutes)

module.exports = router;
