const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/routes");

const server = express();

// La request pasa por el middleware que creamos , luego por morgan y luego por el enrutador

server.use((req, res, next) => {
  // middleware
  console.log("Estamos pasando por un middleware");
  console.log(req.url);
  next();
});

server.use(morgan("dev"));

server.use(mainRouter);

module.exports = server;
