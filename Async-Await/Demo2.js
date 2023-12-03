const axios = require("axios");

// Cambiar en el package Json que archivo quieres ejecutar con npmstart

const miFuncion = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log("Response", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

miFuncion();
