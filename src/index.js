const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//aqui estamos importando las rutas desde user
const moviesRoutes = require("./routes/movies");
const actorsRoutes = require("./routes/actors");
const directorsRoutes = require("./routes/directors");
const genreRoutes = require("./routes/genres");



const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', moviesRoutes);
app.use('/api', actorsRoutes);
app.use('/api', directorsRoutes);
app.use('/api', genreRoutes);


// routes
app.get("/", (req, res) =>{
    res.send("welcome to my API")
});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conected to mongoDB SUCCESFULL'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('serve listening in port', port));