const { Router } = require('express');
const { getCountries } = require('../handlers/countryHandler');
const { getCountryById, getCountryByName } = require ('../handlers/getCountryById');
const countryRoutes = Router();

countryRoutes.get("/", (req, res) => {
    getCountries(req, res)
});

countryRoutes.get("/:id", (req, res) =>{
    getCountryById(req, res)
});


module.exports = countryRoutes;