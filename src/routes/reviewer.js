const express = require("express");
//estamos importando la tabla movies
const reviewerSchema = require("../models/reviewer");

const router = express.Router();

// create actor
router.post('/reviewer', (req, res) => {
    const reviewer = reviewerSchema(req.body);
    reviewer 
    .save()
    // en esta linea de abajo tenemos una promesa 
    .then((data) => res.json(data))
    // captura de un error
    .catch((error) => res.json({message:error}));
});


//get all actors
router.get('/reviewer', (req, res) => {
    reviewerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});


//get a actor
router.get("/reviewer/:id", (req, res) => {
    const { id } = req.params;
    reviewerSchema
      .findOne({ rev_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


 //update a actor
router.put('/reviewer/:id', (req, res) => {
    const { id } = req.params;
    const {rev_id, rev_name} = req.body;
    reviewerSchema
    .updateOne({rev_id:id}, { $set: {rev_id, rev_name} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

}); 


//Delete a actor
router.delete('/reviewer/:id', (req, res) =>{
    const { id } = req.params;
    reviewerSchema
    .remove({rev_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}); 





module.exports = router;