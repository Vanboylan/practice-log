const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessionsRouter = require("./routes/sessions");
const usersRouter = require("./routes/users");
const practicesRouter = require("./routes/practices");
const goalsRouter = require("./routes/goals");
const app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/practice_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  session({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// clear the cookies after user logs out
// app.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//     res.clearCookie("user_sid");
//   }
//   next();
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect("/");
  } else {
    next();
  }
};

app.use("/sessions", sessionsRouter);
app.use("/users", usersRouter);
app.use("/practices", sessionChecker, practicesRouter);
app.use("/goals", sessionChecker, goalsRouter);
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

module.exports = app;
