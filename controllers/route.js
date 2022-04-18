const express = require("express");
const router = express.Router();
let users = require("../db/users.json");

// memanggil file route
const ctrlIndex = require("./index");
const ctrlSignUp = require("./signup");
const ctrlLogin = require("./login");
const ctrlGame = require("./game");
const ctrlUser = require("./user");

// membaca fungsi route
router.get("/", ctrlIndex.index);
router.get("/signup", ctrlSignUp.index);
router.get("/login", ctrlLogin.index);
router.get("/login", ctrlLogin.getUserId);
router.get("/users", ctrlUser.getUser);
router.get("/users/:id", ctrlUser.getUserID);
router.get("/game", ctrlGame.index);

// eksport ke dalam module
module.exports = router;
