let data = require("../utils/data");

// Este controller recibe informacion de un user y lo crea en la base de datos
const createUser = async ({ name, email, username }) => {
  if (!name || !email || !username) throw new Error("faltan datos");

  const newUser = { name, email, username };
  data.push(newUser);
  return newUser;
};

module.exports = createUser;
