const express = require("express");
const app = express();
require("./db/conn");
const MensRanking = require("../src/models/mens");
app.use(express.json());
const port = process.env.PORT || 3000;
const router = require("./routers/route");
app.use(router);

app.listen(port, () => {
  console.log(`Running at ${port}`);
});
