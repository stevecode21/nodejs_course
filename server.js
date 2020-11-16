// Importo la librería de express
const express = require("express");
// Creamos el Router de express
const router = express.Router();
// Inicializo express
var app = express();

app.use(router);

router.get("/message", function (req, res) {
  res.send("Lista de mensajes");
});

router.post("/message", function (req, res) {
  res.send("Mensaje añadido");
});
// Creamos una ruta que me enviará una respuesta
// app.use("/use", function (req, res) {
//   res.send("Hola");
// });

// Configuro mi servidor para escuchar el puerto

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
