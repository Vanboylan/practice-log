const Practice = require("../models/practice");

const PracticesController = {
  Index: (req, res) => {
    let session = req.session.user;
    Practice.find((err, practices) => {
      if (err) {
        throw err;
      }
      res.render("practices/index", {
        practices: practices.reverse(),
        user: session,
      });
    });
  },
  New: (req, res) => {
    res.render("practices/new");
  },
  Create: (req, res) => {
    let session = req.session.user;
    const practice = new Practice(req.body);
    practice.user = session._id;
    practice.save((err) => {
      if (err) {
        throw err;
      }
    });
    res.status(201).redirect(`practices/:id`);
  },
  Read: (req, res) => {
    let id = req.params.id;
    const practice = Practice.findById(id);
    res.render("practices/:id", { practice: practice });
  },
};

module.exports = PracticesController;
