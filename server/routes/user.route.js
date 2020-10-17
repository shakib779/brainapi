const router = require("express").Router();
const userController = require("../controller/user.controller");

// TODO: Add passport authentication and feature adapter

router.get("/users", userController.getUsers);

router.post("/users", userController.createUser);

module.exports = router;
