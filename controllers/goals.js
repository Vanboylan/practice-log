const Goal = require("../models/goal");
const User = require("../models/user");

const GoalsController = {
  Index: (req, res) => {
    let session = req.session.user;
    let goals = async () => {
      let result = await Goal.find({ user: session._id });
      return result;
    };
    goals().then((goals) => {
      res.render("goals/index", {
        goals: goals,
        user: session,
      });
    });
  },
  New: (req, res) => {
    let session = req.session.user;
    let goals = async () => {
      let list = await Goal.find({ user: session._id });
      return list;
    };
    goals().then((goals) => {
      res.render("goals/index", { user: session, goals: goals });
    });
  },
  Create: (req, res) => {
    const goal = new Goal(req.body);
    const session = req.session.user;
    goal.user = session._id;
    goal.title = req.body.title;
    goal.description = req.body.description;
    goal.timeframe = req.body.timeframe;
    const user = async () => {
      let userInfo = await User.findById(session._id);
      return userInfo;
    };
    user().then((user) => {
      user.goals.push(goal._id);
      user.save();
    });
    console.log("goal saved");
    goal
      .save()
      .then(
        res
          .status(201)
          .render("goals/index", { user: session, goals: user.goals })
      );
    console.log("line 51");
  },
  Read: (req, res) => {
    let id = req.params.id;
    let session = req.session.user;
    let goal = async () => {
      let search = await Goal.findById(id);
      return search;
    };
    goal().then(
      res.render("goals/:id", {
        goal: goal,
        user: session,
      })
    );
    console.log("line 66");
  },
};

module.exports = GoalsController;
