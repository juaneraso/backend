const { Router } = require("express");
const {
  getCharacterHandler,
  getCharacterHandlerById,
  postCharacterHandler,
  deleteCharacterHandler,
} = require("../handlers/characterHandlers");

const characterRouter = Router();

characterRouter.get("/", getCharacterHandler);
characterRouter.get("/:id", getCharacterHandlerById);
characterRouter.post("/", postCharacterHandler);
characterRouter.delete("/:id", deleteCharacterHandler);

module.exports = characterRouter;
