const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  const date = new Date();
  const heure = date.getHours();
  console.log(heure);
  if (heure > 8 && heure < 18) {
    res.sendFile(__dirname + "/index.html");
  } else {
    res.send("is closed");
    res.sendFile(__dirname + "/index.html");
  }
});

//

//

app.get("/ourService", function (req, res) {
  res.sendFile(__dirname + "/ourService.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.use("*", function (req, res) {
  res.sendFile(__dirname + "/404.html");
});

app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server mriguil in " + process.env.PORT)
);
