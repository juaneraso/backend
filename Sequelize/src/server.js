const express = require("express");
const morgan = require("morgan");

const server = express();
const findAllEpisodes = require("./controllers/findAllEpisodes");

server.use(morgan("dev")); // middlware morgan

server.get("/character", (req, res) => {
  res.send("Informacion sobre todos los personajes");
});

server.get("/episode", async (req, res) => {
  try {
    const episodes = await findAllEpisodes();
    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
server.post("/episode", (req, res) => {});

module.exports = server;
