const mongoose = require("mongoose");
const  moviesSchema = require("../models/movies");
const ratingSchema = mongoose.Schema({
    mov_id: {
        type: Number,
        required: true
    },
    rev_id: {
        type: Number,
        required: true
    },
    rev_starts:{
        type: Number,
        required: true
    },
    num_0_ratings:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("Rating", ratingSchema)