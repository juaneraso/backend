const findAllCharacters = require("../controllers/findAllCharacters");
const findCharacterById = require("../controllers/findCharacterById");
const createCharacter = require("../controllers/createCharacter");
const deleteCharacter = require("../controllers/deleteCharacter");

const getCharacterHandler = async (req, res) => {
  const { status } = req.query; //Alive Dead Unknow Undefined

  try {
    const characters = status
      ? await findAllCharacters({ status })
      : await findAllCharacters();

    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCharacterHandlerById = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await findCharacterById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postCharacterHandler = async (req, res) => {
  try {
    const { name, gender, status, origin, species, episodes } = req.body;
    const newCharacter = await createCharacter({
      name,
      gender,
      status,
      origin,
      species,
      episodes,
    });
    res.status(200).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCharacterHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCharacter = await deleteCharacter(id);
    res.status(200).json(deletedCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharacterHandler,
  getCharacterHandlerById,
  postCharacterHandler,
  deleteCharacterHandler,
};
