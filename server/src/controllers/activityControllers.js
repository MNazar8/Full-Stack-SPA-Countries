const {Activity, Country} = require('../db');

const createActivities = async (req, res) =>{
    const {id, name, difficulty, duration, season, countries} = req.body;
    if(!name || !difficulty || !season) return res.status(400).send({msg: "Insufficient filled data"});
    try {
        let newActivity = await Activity.create({id, name, difficulty, duration, season})
        let selectedCountries = await Country.findAll({
            where: {name: countries}
        })
        await newActivity.addCountry(selectedCountries);
        return res.status(201).send(newActivity);
    } catch (error) {
        return res.status(404).send({error: error.message});
    }
}

module.exports = {createActivities};