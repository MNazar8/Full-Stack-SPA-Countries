const { Country, Activity } = require("../db");
const axios = require("axios");

let URL = "https://restcountries.com/v3/all/";


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
                imgFlag: country.flags[1],
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