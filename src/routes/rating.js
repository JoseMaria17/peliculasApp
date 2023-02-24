const express = require("express");
const rating = require("../models/rating");
const ratingSchema = require("../models/rating");

const router = express.Router();

//create rating

router.post('/ratings', (req, res) => {
    const rating = ratingSchema(req.body);
    rating
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//get all ratings

router.get('/ratings', (req, res) => {
    rating
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});


//get a rating 
router.get("/ratings/:id", (req,res) =>{
    const {id} = req.params;
    ratingSchema
    .findOne({rev_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
}) 

//update a rating
router.put('/ratings/:id', (req, res) => {
    const {id} = req.params;
    const { mov_id, rev_id, rev_starts, num_0_ratings}  = req.body;
    ratingSchema
    .updateOne({rev_id:id}, {$set: { mov_id, rev_id, rev_starts, num_0_ratings}})
    .catch((error) => res.json({message:error}));

})

//Delete a rating
router.delete('/ratings/:id', (req, res) =>{
    const {id} = req.params;
    actorsSchema
    .remove({rev_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;