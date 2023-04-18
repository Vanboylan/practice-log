const User = require("../models/user");

const SessionsController = {
  Home: (req, res) => {
    res.render("index");
  },
  New: (req, res) => {
    res.render("sessions/new");
  },
  Create: (req, res) => {
    let user = async () => {
      let search = await User.findOne({ username: req.body.username });
      return search;
    };
    const passwordCompare = (a, b) => {
      return a === b;
    };
    user().then((result) => {
      if (!result) {
        console.log("no result");
        res.render("sessions/new");
      } else if (passwordCompare(result.password, req.body.password)) {
        req.session.user = result;
        console.log("success");
        res.render("goals/index");
      } else {
        console.log("password not matched");
        res.render("sessions/new");
      }
    });
  },
};

module.exports = SessionsController;
