const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
const port = process.env.PORT || 3000;
const Student = require("./models/students");
// const routerPath =path.join(__dirname,"./Routers/routers.js");
const studentRouter = require("./Routers/routers");

app.use(express.json());


app.use(studentRouter);


// Asycn Await

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
