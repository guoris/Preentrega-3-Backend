const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.MONGO_DB_NAME}`
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => console.log('Conectado a mongoDb!'))
 .catch(err => console.log(err));

 module.exports = { mongoose };
