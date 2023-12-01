const axios = require("axios");

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res.data));

// console.log("Fin");

const miFuncion = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response);
};

miFuncion();
