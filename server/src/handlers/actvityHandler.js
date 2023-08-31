const { Country, Activity} = require("../db");


const getActivities = async (req, res) => {
    const allActivities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });
        res.status(200).send(allActivities)
};



module.exports = {
    getActivities
};