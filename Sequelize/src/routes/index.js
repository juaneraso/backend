const { Router } = require("express");
const characterRouter = require("./characterRouter");
const episodeRouter = require("./episodeRouter");

const mainRouter = Router();

mainRouter.use("/character", characterRouter);
mainRouter.use("/episode", episodeRouter);

module.exports = mainRouter;
