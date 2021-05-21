const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.post("/", function(req, res){
  const quant = req.body.diceQuantity;
  const type = req.body.diceType;
  const results = [];
  let sum = 0;
  for (var i = 0; i < quant; i++) {
    const rng = Math.floor(Math.random() * (type)) + 1;
    results.push(rng);
    sum += rng;
  }
  res.render("results", {quant: quant, type: type, sum: sum, results: results});
});

app.listen(port, function(){
  console.log("The server is running on port " + port + ".");
});
