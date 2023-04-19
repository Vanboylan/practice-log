const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
// router.get("/:id", UsersController.View);
router.post("/new", UsersController.Create);
router.get("/index", UsersController.Index);

module.exports = router;
