require("dotenv").config();

const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");
const CharacterFunction = require("./models/Character");
const EpisodeFunction = require("./models/Episodes");

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  { logging: false }
);

CharacterFunction(database);
EpisodeFunction(database);

const { Character, Episode } = database.models;

Character.belongsToMany(Episode, { through: "CharacterEpisode" });
Episode.belongsToMany(Character, { through: "CharacterEpisode" });

module.exports = {
  database,
  ...database.models,
};

// Vamos a crear la conexion con la base de datos

// Usuario de postgres, password de postgress
// localhost
// 5432
// Nombre de la base de datos jorgevega
