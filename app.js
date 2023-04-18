const express = require("express");
const path = require("path");
const __dirname = path.resolve();
const session = require("express-session");
const bodyParser = require("body-parser");
const port = process.env.PORT;

const usersRouter = require("./routes/users");
const practicesRouter = require("./routes/practices");
const goalsRouter = require("./routes/goals");
const sessionsRouter = require("./routes/sessions");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + "/public"));
app.use("/", sessionsRouter);

app.listen(port, () => {
  console.log(`listening on PORT${port}`);
});

process.on("uncaughtException", (error, origin) => {
  console.log("exception ---->" + error);
  console.log("origin ----->" + origin);
});

process.on("unhandledRejection", (error, origin) => {
  console.log("rejection ---->" + error);
  console.log("origin ----->" + origin);
});

export default app;
