const User = require("../models/user");

const SessionsController = {
  Home: (req, res) => {
    res.render("index");
  },
  New: (req, res) => {
    res.render("sessions/new");
  },
  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        res.redirect("sessions/new");
      } else if (!user.password == password) {
        res.redirect("sessions/new");
      } else {
        req.session.user = user;
        res.redirect("users/index");
      }
    });
  },
};

module.exports = SessionsController;
