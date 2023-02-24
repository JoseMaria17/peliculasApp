const express = require("express");
const router = express.Router();
const genresSchema = require("../models/genres");

//create genre
router.post('/genres', (req, res) => {
    const genres = genresSchema(req.body);
    genres
    .save()
    .then((data) => res.json(data))
    .catch((error) =>res.json({message:error}));
})

//get all genres
router.get('/genres', (req,res) =>{
    genresSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//get a genre
router.get('/genres/:id', (req, res) =>{
    const {id} = req.params;
    genresSchema
    .findOne({gen_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

//update a genre
router.put('/genres/:id', (req,res) =>{
    const {id} = req.params;
    const {gen_id, gen_title } = req.body;
    genresSchema
    .updateOne({gen_id:id}, {$set: {gen_id, gen_title}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});


//delete a actor 
router.delete('/genres/:id', (req, res) =>{
    const {id} = req.params;
    genresSchema
    .remove({gen_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});



module.exports = router;

