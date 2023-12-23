const findAllEpisodes = require("../controllers/findAllEpisodes");
const createEpisode = require("../controllers/createEpisode");
const createBulkEpisodes = require("../controllers/createBulkEpisodes");

const getEpisodesHandler = async (req, res) => {
  try {
    const episodes = await findAllEpisodes();
    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postEpisodesHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const newEpisode = await createEpisode(name);
    res.status(201).json(newEpisode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postBulkEpisodesHandler = async (req, res) => {
  const { episodes } = req.body;
  try {
    const created = await createBulkEpisodes(episodes);
    res.status(200).json({ response: created });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEpisodesHandler,
  postEpisodesHandler,
  postBulkEpisodesHandler,
};
