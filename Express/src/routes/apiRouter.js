const { Router } = require("express");

const database = require("../database");

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    const searchResults = database.filter((char) => char.name === name);
    res.status(200).json(searchResults);
  } else {
    res.status(200).json(database);
  }
});

apiRouter.get("/:id", (req, res) => {
  // const id = req.params.id;
  try {
    const { id } = req.params;
    const character = database.find((char) => char.id == id);
    if (!character) {
      throw Error("Character does not exist");
    }

    res.status(200).json(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

apiRouter.post("/", (req, res) => {
  console.log(req.body);
  const { name, gender } = req.body;

  const newCharacter = {
    id: database.length + 1,
    name,
    gender,
    species: "Human",
    status: "Alive",
  };
  database.push(newCharacter);

  res.status(200).json({ Created: "Ok" });
});

// apiRouter.get("/location", (req, res) => {
//   res.status(200).send("Estamos en API");
// });

// apiRouter.get("/episodes", (req, res) => {
//   res.status(200).send("Estamos en API");
// });

module.exports = apiRouter;
