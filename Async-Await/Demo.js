const axios = require("axios");

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res.data));

// console.log("Fin");

const results = [];

const miFuncion = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  console.log("Response", response.data);
};

miFuncion();

// const miFuncion_2 = async () => {
//   // const response = await axios.get(
//   //   "https://jsonplaceholder.typicode.com/users/1"
//   // );

//   const urls = [
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/users/2",
//     "https://jsonplaceholder.typicode.com/users/3",
//     "https://jsonplaceholder.typicode.com/users/4",
//     "https://jsonplaceholder.typicode.com/users/5",
//     "https://jsonplaceholder.typicode.com/users/6",
//     "https://jsonplaceholder.typicode.com/users/7",
//     "https://jsonplaceholder.typicode.com/users/8",
//     "https://jsonplaceholder.typicode.com/users/9",
//   ];

//   for (let i = 0; i < urls.length; i++) {
//     const data = await axios.get(urls[i]);
//     results.push(data.data);

//     console.log("Listo Usuario");
//   }
//   console.log("FIN");

// };

// miFuncion_2();

// PROMISE ALL

// const urls = [
//   "https://jsonplaceholder.typicode.com/users/1",
//   "https://jsonplaceholder.typicode.com/users/2",
//   "https://jsonplaceholder.typicode.com/users/3",
//   "https://jsonplaceholder.typicode.com/users/4",
//   "https://jsonplaceholder.typicode.com/users/5",
//   "https://jsonplaceholder.typicode.com/users/6",
//   "https://jsonplaceholder.typicode.com/users/7",
//   "https://jsonplaceholder.typicode.com/users/8",
//   "https://jsonplaceholder.typicode.com/users/9",
// ];

// const promises = urls.map((url) => axios.get(url));

// Promise.all(promises)
//   .then((responses) => {
//     responses.forEach((response) => results.push(response.data));
//   })
//   .then((response) => console.log(results));
