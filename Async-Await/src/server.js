const express = require("express");
const router = require("./router/index");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(router);

module.exports = server;

// Este modulo solo se encargar de crear el servidor
