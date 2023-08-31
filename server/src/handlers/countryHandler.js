const { Country, Activity } = require("../db");
const axios = require("axios");

let URL = "http://localhost:5000/countries";


const getCountries = async (req, res) => {
    const { name } = req.query
    const allCountries = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
    if (name) {
        const filteredCountries = allCountries.filter((c) =>
            c.name.toLowerCase().includes(name.toLowerCase()))
        return filteredCountries.length ?
            res.status(200).send(filteredCountries) :
            res.status(400).send('Country not found')
    }
    if (!allCountries.length) {
        let apiResponse = await axios.get(URL)
        let apiCountries = apiResponse.data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                imgFlag: country.flags.png,
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : "This country doesn't have capital",
                subregion: country.subregion ? country.subregion : "This country doesn't have subregion",
                area: country.area,
                population: country.population

            }
        })
        await Country.bulkCreate(apiCountries)
        res.status(200).send(apiCountries)
    } else{
        return res.status(200).send(allCountries)
    }

};



module.exports = {
    getCountries
};