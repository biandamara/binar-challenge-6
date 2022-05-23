const express = require("express");
const router = express.Router();
let users = require("../db/users.json");

// memanggil file route
const index = require("../controllers/index");
const signup = require("../controllers/signup");
const login = require("../controllers/login");
const user = require("../controllers/user");
const dashboard = require("../controllers/dashboard");
const game = require("../controllers/game");

// membaca fungsi route
router.get("/", index.index);
router.get("/signup", signup.index);
router.get("/login", login.index);
router.get("/login", login.getUserId);
router.get("/users", user.getUser);
router.get("/users/:id", user.getUserID);
router.get("/dashboard", dashboard.allUserGame);
router.get("/dashboard/create", dashboard.addUserGameIndex);
router.get("/dashboard/detail/:id", dashboard.oneUserGame);
router.get("/dashboard/update/:id", dashboard.updateUserGameIndex);
router.get("/dashboard/delete/:id", dashboard.deleteUserGame);
router.get("/game", game.index);
router.post("/login", login.getLogin);
// router.post("/signup", signup.addUserGame);
router.post("/dashboard/create", dashboard.addUserGame);
router.post("/dashboard/update/:id", dashboard.updateUserGame);

// modul ekspor
module.exports = router;
