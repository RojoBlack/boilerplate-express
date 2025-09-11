require('dotenv').config();
let express = require("express");
let app = express();

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/now", function (req, res, next) {
  // Middleware: añade la hora al objeto request
  req.time = new Date().toString();
  next();
}, function (req, res) {
  // Handler final: responde con un JSON
  res.json({ time: req.time });
});


// ✅ servir archivos estáticos desde /public
app.use("/public", express.static(__dirname + "/public"));

// ✅ servir index.html en la raíz
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// 👇 Agrega esto para debug
console.log("MESSAGE_STYLE:", process.env.MESSAGE_STYLE);

// ✅ servir JSON con soporte de variable de entorno
app.get("/json", (req, res) => {
  let response = { message: "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  }

  res.json(response);
});


module.exports = app;




























 module.exports = app;
