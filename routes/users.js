const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.get("/:id", UsersController.View);
router.get("/new", UsersController.New);
router.post("/new", UsersController.Create);

module.exports = router;
