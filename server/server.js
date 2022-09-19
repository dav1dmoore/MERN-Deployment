// import express
const express = require("express");

//import mongood
const mongoose = require("mongoose");

//import cors
const cors = require("cors");

//create instance of express
const app = express();

//select our port
const port = 8000;

//enable cors
app.use(cors());


//Use express return Json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//connect to mongoose config
require("./config/mongoose.config")

//import routes and include (app) for express
require("./routes/pet.routes")(app)

//listen for connections on specified ports
app.listen(port, () => {console.log(`listen on port ${port}`)})



// 1. install express
// 2. Install mongoose
// 3. install cors