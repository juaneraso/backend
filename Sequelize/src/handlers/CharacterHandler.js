const findAllCharacters = require("../controllers/findAllCharacters");

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

module.exports = getCharacterHandler;
