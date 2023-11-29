const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/routes");

const server = express();

// La request pasa por el middleware que creamos , luego por morgan y luego por el enrutador

server.use((req, res, next) => {
  // Primer middleware
  // middleware
  console.log("Estamos pasando por un middleware");
  console.log(req.url);
  next();
});

server.use(morgan("dev")); //Segundo middleware

server.use(express.json()); // Middleware que convierte los objetos json en objetos de javascript

server.use(mainRouter); //Tercer middleware

module.exports = server;
