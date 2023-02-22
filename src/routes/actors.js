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


//get all actors
router.get('/actors', (req, res) => {
    actorsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//get a actor
router.get("/actors/:id", (req, res) => {
    const { id } = req.params;
    actorsSchema
      .findOne({ act_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


 //update a actor
router.put('/actors/:id', (req, res) => {
    const { id } = req.params;
    const {act_id, act_fname, act_lname, act_gender } = req.body;
    actorsSchema
    .updateOne({act_id:id}, { $set: {act_id, act_fname, act_lname, act_gender} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

}); 


//Delete a actor
router.delete('/actors/:id', (req, res) =>{
    const { id } = req.params;
    actorsSchema
    .remove({act_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}); 





module.exports = router;