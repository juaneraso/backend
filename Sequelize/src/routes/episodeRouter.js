const { Router } = require("express");
const {
  getEpisodesHandler,
  postEpisodesHandler,
  postBulkEpisodesHandler,
} = require("../handlers/episodesHandlers");

const episodeRouter = Router();

episodeRouter.get("/", getEpisodesHandler);
episodeRouter.post("/", postEpisodesHandler);
episodeRouter.post("/bulk", postBulkEpisodesHandler);

module.exports = episodeRouter;
