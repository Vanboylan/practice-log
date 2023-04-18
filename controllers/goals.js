const Goal = require("../models/goal");

const GoalsController = {
  Index: (req, res) => {
    let session = req.session.user;
    Goal.find((err, goals) => {
      if (err) {
        throw err;
      }
      res.render("goals/index", {
        goals: goals.reverse(),
        user: session,
      });
    }).populate("practices");
  },
  New: (req, res) => {
    res.render("goals/new");
  },
  Create: (req, res) => {
    let session = req.session.user;
    const goal = new Goal(req.body);
    goal.user = session._id;
    goal.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect(`goals/${goal.id}`);
    });
  },
};

module.exports = GoalsController;
