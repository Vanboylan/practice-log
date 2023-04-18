const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("/new");
  },
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/sessions/new");
    });
  },
  View: (req, res) => {
    let id = req.params.id;
    res.redirect(`users/${id}`);
  },
};

module.exports = UsersController;
