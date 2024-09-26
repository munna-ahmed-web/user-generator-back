const { Router } = require("express");
const userController = require("../controller/userController");

const router = Router();
router.get("/users", userController.getUsers);
router.post("/users/generate", userController.createFakeUsers);

module.exports = router;
