const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path =require("path");




//public static path

const staticPath =path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
  // res.send("about page");
  res.render("about")

});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.send("404 Error Page");
});

app.listen(port, () => {
  console.log("listening");
});
