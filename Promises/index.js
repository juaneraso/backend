const axios = require("axios");

// axios.get("https://rickandmortyapi.com/api/episode").then(
//   (res) => console.log(res.data),
//   (error) => console.log(error)
// );

// fetch("https://rickandmortyapi.com/api/episode")
//   .then((response) => response.json()) // Return implicito
//   .then((data) => console.log(data));

const miPromesa = new Promise((resolve, reject) => {
  resolve("Todo mal");
  // resolve("Holis");
});

miPromesa
  .then(
    (response) => {
      return "todo bien";
    }, // Succes handler
    (error) => console.log("Rechazada")
  )
  .then(
    (response) => {
      return response;
    },
    (error) => console.log(error)
  )
  .then(
    (respuesta) => console.log(respuesta),
    (error) => console.log(error)
  );
