const express = require("express");
const router = express.Router();

const PracticesController = require("../controllers/practices");

router.get("/", PracticesController.Index);
router.post("/", PracticesController.New);
router.get("/new", PracticesController.Create);
router.get("/:id", PracticesController.Read);

module.exports = router;
