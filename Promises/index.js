const axios = require("axios");

axios.get("https://rickandmorty.com/api/character").then((res) => {
  console.log(res.data);
});
