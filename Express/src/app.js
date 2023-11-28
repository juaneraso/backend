const express = require("express");
const morgan = require("morgan");

const server = express();

server.use((req, res, next) => {
  // middleware
  console.log("Estamos pasando por un middleware");
  console.log(req.url);
  next();
});

server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hola mundo" });
});

server.get("/api", (req, res) => {
  res.status(200).send("Estamos en API");
});

module.exports = server;
