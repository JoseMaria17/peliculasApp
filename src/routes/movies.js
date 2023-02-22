const express = require("express");
//estamos importando la tabla movies
const moviesSchema = require("../models/movies");

const router = express.Router();

// create user
router.post('/movies', (req, res) => {
    const movie = moviesSchema(req.body);
    movie 
    .save()
    // en esta linea de abajo tenemos una promesa 
    .then((data) => res.json(data))
    // captura de un error
    .catch((error) => res.json({message:error}));

});


//get all users
router.get('/movies', (req, res) => {
    moviesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//get a users
router.get("/movies/:id", (req, res) => {
    const { id } = req.params;
    moviesSchema
      .findOne({ mov_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


//update a users
router.put('/movies/:id', (req, res) => {
    const { id } = req.params;
    const {mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body;
    moviesSchema
    .updateOne({mov_id:id}, { $set: {mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//Delete a users
router.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    moviesSchema
    .remove({mov_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}); 




module.exports = router;




