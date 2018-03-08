const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use("/scripts", express.static(__dirname + "/node_modules/chart.js/dist/"));
app.set("view engine", "ejs");
app.set("views", "./views/pages");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/results", (req, res) => {
  console.log("results page");
  console.log(req.body);
  const resultsAll = [];
  for (let key in req.body) {
    resultsAll.push(req.body[key]);
  }
  //render view with manipulated data
  res.render("results", { results: JSON.stringify(resultsAll) });
});

app.get("/", (req, res) => {
  res.render("form");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port: ", port));
