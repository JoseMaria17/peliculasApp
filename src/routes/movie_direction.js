const express = require("express");
//estamos importando la tabla directors
const movie_directionSchema= require("../models/movie_direction");

const router = express.Router();

// create movie_cast
router.post('/movie_direction', (req, res) => {
    const movie_direction = movie_directionSchema(req.body);
    movie_direction
    .save()
    // en esta linea de abajo tenemos una promesa 
    .then((data) => res.json(data))
    // captura de un error
    .catch((error) => res.json({message:error}));

});


//get all movie_cast
router.get('/movie_direction', (req, res) => {
    movie_directionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//get a movie_cast
router.get("/movie_direction/:id", (req, res) => {
    const { id } = req.params;
    movie_directionSchema
      .findOne({ dir_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


 //update a movie_cast
router.put('/movie_direction/:id', (req, res) => {
    const { id } = req.params;
    const {dir_id, mov_id} = req.body;
    movie_directionSchema
    .updateOne({dir_id:id}, { $set: {dir_id, mov_id} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

}); 


//Delete a movie_cast
router.delete('/movie_direction/:id', (req, res) =>{
    const { id } = req.params;
    movie_directionSchema
    .remove({dir_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}); 


module.exports = router;