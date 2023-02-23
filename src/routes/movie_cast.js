const express = require("express");
//estamos importando la tabla directors
const movie_castSchema = require("../models/movie_cast");

const router = express.Router();

// create movie_cast
router.post('/movie_cast', (req, res) => {
    const movie_cast = movie_castSchema(req.body);
    movie_cast
    .save()
    // en esta linea de abajo tenemos una promesa 
    .then((data) => res.json(data))
    // captura de un error
    .catch((error) => res.json({message:error}));

});


//get all movie_cast
router.get('/movie_cast', (req, res) => {
    movie_castSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//get a movie_cast
router.get("/movie_cast/:id", (req, res) => {
    const { id } = req.params;
    movie_castSchema
      .findOne({ act_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


 //update a movie_cast
router.put('/movie_cast/:id', (req, res) => {
    const { id } = req.params;
    const {act_id, mov_id, role} = req.body;
    movie_castSchema
    .updateOne({act_id:id}, { $set: {act_id, mov_id, role} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

}); 


//Delete a movie_cast
router.delete('/movie_cast/:id', (req, res) =>{
    const { id } = req.params;
    movie_castSchema
    .remove({act_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}); 





module.exports = router;