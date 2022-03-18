const sneksModel = require('../models/sneks.model');
const sneksController = {};

sneksController.getSneks = async (req, res) => {
    const sneks = await sneksModel.find();
    res.json(sneks);

};

module.exports = sneksController;