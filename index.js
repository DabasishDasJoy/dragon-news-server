const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("Drawn news api is running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Dragon-news app is listening on port ", port);
});
