require('dotenv').config();
let express = require("express");
let app = express();

// ✅ servir archivos estáticos desde /public
app.use("/public", express.static(__dirname + "/public"));

// ✅ servir index.html en la raíz
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

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
