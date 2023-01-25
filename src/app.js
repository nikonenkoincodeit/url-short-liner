const express = require("express");
const app = express();
const indexRouter = require("./routes");
const linksRouter = require("./routes/links");
var bodyParser = require("body-parser");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(indexRouter);
app.use("/link", linksRouter);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Start server!");
    });
  })
  .catch((error) => {
    console.log("Error ", JSON.stringify(error));
  });
