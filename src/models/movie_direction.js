const mongoose = require("mongoose");

const movie_directionSchema= mongoose.Schema({
    dir_id: {
        type: Number,
        required: true,
        ref: "Directors"
    },    
    mov_id: {
        type: Number,
        required: true,
        ref: "Movies"
    }
   
})


module.exports = mongoose.model("MovieDirection", movie_directionSchema);