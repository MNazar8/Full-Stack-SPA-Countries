const { Country, Activity } = require("../db");

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        const countryId = await Country.findByPk(id.toUpperCase(), {
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {
                    attributes: []
                }
            }
        });
        if (countryId) {
            return res.status(200).send(countryId)
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }
}



module.exports = {
    getCountryById,
}