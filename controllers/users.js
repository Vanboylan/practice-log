const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new");
  },
  Create: (req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    user.save().then(() => {
      res.status(201).redirect("/sessions/new");
    });
  },
  View: (req, res) => {
    let id = req.params.id;
    const user = user.findById(id);
    res.redirect("/:id", { user: user });
  },
};

module.exports = UsersController;
