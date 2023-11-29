const { Router } = require("express");
const apiRouter = require("./apiRouter");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hola mundo" });
});

mainRouter.use("/api", apiRouter);

module.exports = mainRouter;
