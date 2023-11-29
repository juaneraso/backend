const { Router } = require("express");

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.status(200).send("Estamos en API");
});

apiRouter.get("/characters", (req, res) => {
  res.status(200).send("Estamos en API");
});

apiRouter.get("/location", (req, res) => {
  res.status(200).send("Estamos en API");
});

apiRouter.get("/episodes", (req, res) => {
  res.status(200).send("Estamos en API");
});

module.exports = apiRouter;
