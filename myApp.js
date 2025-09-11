require('dotenv').config();
let express = require("express");
let app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.route("/name")
  .get((req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const { first, last } = req.body;
    res.json({ name: `${first} ${last}` });
  });

  app.post("/name", (req, res) => {
  const { first, last } = req.body; 
  res.json({ name: `${first} ${last}` });
});


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

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
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
