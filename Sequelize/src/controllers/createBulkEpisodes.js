const { Episode } = require("../db");

const createdBulkEpisodes = async (episodes) => {
  const newEpisodes = await Episode.bulkCreate(episodes);
  return newEpisodes;
};

module.exports = createdBulkEpisodes;
