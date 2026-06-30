require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
  console.log( "Example app listening on port");
  mongoose.connect(uri);
  console.log("DB connected");
});
