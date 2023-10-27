const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
require('dotenv').config({ path: '.env.local' });

router.get('/:slug', async (req, res, next) => {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    }

    const planetName = req.params.slug;
    const planetSchema = new mongoose.Schema({
        title: {type: String, required: true},
        info: {type: String, required: true}
    })

    mongoose.models = {};
    const model = mongoose.model(`Planets`, planetSchema, `Planets`);
    let data = await model.find({
        title: `${planetName}`
    });
    res.status(200).json({
        data
    })
    next();
})

module.exports = router;