const express = require("express");
//estamos importando la tabla directors
const directorsSchema = require("../models/directors");

const router = express.Router();

// create director
router.post('/directors', (req, res) => {
    const director = directorsSchema(req.body);
    director
    .save()
    // en esta linea de abajo tenemos una promesa 
    .then((data) => res.json(data))
    // captura de un error
    .catch((error) => res.json({message:error}));

});


//get all directors
router.get('/directors', (req, res) => {
    directorsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//get a director
router.get("/directors/:id", (req, res) => {
    const { id } = req.params;
    directorsSchema
      .findOne({ dir_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


 //update a director
router.put('/directors/:id', (req, res) => {
    const { id } = req.params;
    const {dir_id, dir_fname, dir_lname} = req.body;
    directorsSchema
    .updateOne({dir_id:id}, { $set: {dir_id, dir_fname, dir_lname} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

}); 


//Delete a director
router.delete('/directors/:id', (req, res) =>{
    const { id } = req.params;
    directorsSchema
    .remove({dir_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}); 





module.exports = router;