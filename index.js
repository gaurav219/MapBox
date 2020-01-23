const express = require("express");

const app = express();

const env = require("dotenv").config();
//const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

app.use(express.json());

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const key = process.env.accessToken;
  res.render("index", { key });
});

app.listen(3000, () => {
  console.log("Listening to 3000");
});
