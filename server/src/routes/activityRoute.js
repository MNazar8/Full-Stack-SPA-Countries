const { Router } = require('express');
const { getActivities } = require('../handlers/actvityHandler');
const { createActivities } = require ('../controllers/activityControllers');
const activityRoutes = Router();

activityRoutes.post("/", (req, res) => {
    createActivities(req, res)
});

activityRoutes.get("/", (req, res) => {
    getActivities(req, res)
});

module.exports = activityRoutes;