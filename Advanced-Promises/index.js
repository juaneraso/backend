const flag = false;

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flag) {
      resolve("Todo OK");
    } else reject("Todo mal");
  }, 1000);
});

// promiseA // Se resuelve a todo OK
//   .then((value) => {
//     // Se resuelve a tukis , porque es lo que retorna su succes handler
//     return "Tukis";
//   })
//   .then((value) => console.log(value)) // Se resuelve a undefined , es lo que retorna el console.log
//   // Consologueo el valor de la promesa anterior
//   .catch((error) => console.log(error));

promiseA
  .then((value) => {
    return "La anterior se resolvio";
  })
  .catch((error) => {
    throw "Se rechazo";
  })
  .then((value) => console.log(value))
  .then()
  .catch((value) => console.log(value));
