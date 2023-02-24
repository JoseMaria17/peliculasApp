const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//aqui estamos importando las rutas
const moviesRoutes = require("./routes/movies");
const actorsRoutes = require("./routes/actors");
const directorsRoutes = require("./routes/directors");
<<<<<<< HEAD
const genreRoutes = require("./routes/genres");
const ratingRoutes = require("./routes/rating");
const reviewerRoutes = require("./routes/reviewer");
=======
const movie_castRoutes = require("./routes/movie_cast");
const movie_directionRoutes = require("./routes/movie_direction");

>>>>>>> origin

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', moviesRoutes);
app.use('/api', actorsRoutes);
app.use('/api', directorsRoutes);
<<<<<<< HEAD
app.use('/api', genreRoutes);
app.use('/api', ratingRoutes);
app.use('/api', reviewerRoutes);

=======
app.use('/api', movie_castRoutes );
app.use('/api', movie_directionRoutes );
>>>>>>> origin


// routes
app.get("/", (req, res) =>{
    res.send("welcome to my API")
});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
<<<<<<< HEAD
.then(() => console.log('conected to mongoDB SUCCESFULL'))
=======
.then(() => console.log('coneected to mongoDB SUCCESSFULL'))
>>>>>>> origin
.catch((error) => console.error(error));

app.listen(port, () => console.log('serve listening in port', port));
