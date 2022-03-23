const sneksModel = require('../models/sneks.model');
const sneksController = {};

sneksController.getSneks = async (req, res) => {
    const sneks = await sneksModel.find();
    res.json(sneks);

};

sneksController.addSnek = async (req, res) => {
    const snek = new sneksModel(req.body);
    await snek.save();
    res.json({'status' : 'Serpiente almacenada exitosamente'});

};
module.exports = sneksController;