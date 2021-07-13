const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path =require("path");



//public static path

const staticPath =path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.send("working like charm Daang");
});
app.get("/about", (req, res) => {
  res.send("about page");

});
app.get("/weather", (req, res) => {
  res.send("weather page");
});
app.get("*", (req, res) => {
  res.send("404 Error Page");
});

app.listen(port, () => {
  console.log("listening");
});
