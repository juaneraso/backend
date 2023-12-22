const express = require("express");
const morgan = require("morgan");

const mainRouter = require("./routes/index");

const server = express();

server.use(express.json());
server.use(morgan("dev")); // middlware morgan

server.use(mainRouter);

module.exports = server;
