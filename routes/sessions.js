const express = require("express");
const router = express.Router();
const SessionsController = require("../controllers/sessions");

router.get("/new", SessionsController.New);
router.post("/new", SessionsController.Create);

module.exports = router;