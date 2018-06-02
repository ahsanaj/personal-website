const express = require("express");
const app = express();

//app.use(express.static(__dirname + "/app"));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(require("./routes/index"));
