const express = require("express");
const morgan = require("morgan");
const findAllEpisodes = require("./controllers/findAllEpisodes");
const createEpisode = require("./controllers/createEpisode");
const createCharacter = require("./controllers/createCharacter");
const findCharacterById = require("./controllers/findCharacterById");
const deleteCharacter = require("./controllers/deleteCharacter");
const createdBulkEpisodes = require("./controllers/createBulkEpisodes");

const mainRouter = require("./routes/index");

const server = express();

server.use(express.json());
server.use(morgan("dev")); // middlware morgan

server.use(mainRouter);

// server.post("/episode/bulk", async (req, res) => {
//   const { episodes } = req.body;
//   const created = await createdBulkEpisodes(episodes);
//   res.status(200).json({ response: "created" });
// });

module.exports = server;
