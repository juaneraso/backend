const { Episode } = require("../db");

const findAllEpisodes = async () => {
  const episodes = await Episode.findAll();
  return episodes;
};

module.exports = findAllEpisodes;
