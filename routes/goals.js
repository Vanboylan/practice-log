const express = require("express");
const router = express.Router();
const GoalsController = require("../controllers/goals");

router.get("/index", GoalsController.Index);
router.post("/new", GoalsController.Create);
router.get("/new", GoalsController.New);
router.get("/:id", GoalsController.Read);

module.exports = router;
