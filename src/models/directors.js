const mongoose = require("mongoose");

const directorsSchema = mongoose.Schema({
    dir_id: {
        type: Number,
        required: true
    },
    dir_fname: {
        type: String,
        required: true
    },
    dir_lname: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Directors", directorsSchema);