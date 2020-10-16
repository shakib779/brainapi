const router = require("express").Router();
const userController = require("../controller/user.controller");

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);


module.exports = router;
