const http = require("http");

const students = [
  { id: 1, name: "Jorge" },
  { id: 2, name: "Homero" },
  { id: 3, name: "Goku" },
  { id: 4, name: "Miguel" },
  { id: 5, name: "Juan" },
];

const fs = require("fs");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Holis!");

    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    console.log("Esta llegando una peticion", url);

    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Holis!"); // El return corta la funcion entera
    }

    if (url === "/students") {
      res.writeHead(200, { "Content-Type": "aplication/json" });
      return res.end(JSON.stringify(students));
    }

    if (url === "/html") {
      const html = fs.readFileSync(__dirname + "/src/index.html", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(html);
    }

    if (url === "/template") {
      const html = fs.readFileSync(__dirname + "/src/template.html", "utf-8");
      const nombre = "Kevin";

      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(html.replace("{nombre}", nombre));
    }

    res.writeHead(404);
    res.end();
  })
  //   .listen(3001, "localhost");
  .listen(3001);
