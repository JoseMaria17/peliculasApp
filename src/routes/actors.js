const express = require("express");
//estamos importando la tabla movies
const actorsSchema = require("../models/actors");

const router = express.Router();

// create actor
router.post('/actors', (req, res) => {
    const actor = actorsSchema(req.body);
    actor 
    .save()
    // en esta linea de abajo tenemos una promesa 
    .then((data) => res.json(data))
    // captura de un error
    .catch((error) => res.json({message:error}));

});

//get all actor
router.get('/actors', (req, res) => {
    actorsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});

module.exports = router;