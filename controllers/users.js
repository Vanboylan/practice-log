const User = require("../models/user");

const UsersController = {
  Index: (req, res) => {
    let session = req.session.user;
    let user = async () => {
      let result = await User.findById(session._id);
      return result;
    };
    user().then((user) => {
      res.render("users/index", { user: user });
    });
  },
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
  // View: (req, res) => {
  //   let id = req.params.id;
  //   const user = async () => {
  //     let result = await User.findById(id);
  //     return result;
  //   };
  //   res.redirect("/:id", { user: user });
  // },
};

module.exports = UsersController;
