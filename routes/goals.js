const express = require("express");
const router = express.Router();
const GoalsController = require("../controllers/goals");

router.get("/", GoalsController.Index);
router.post("/", GoalsController.New);
router.get("/new", GoalsController.Create);
router.get("/:id", GoalsController.Read);

module.exports = router;
