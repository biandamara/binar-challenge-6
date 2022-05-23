const express = require("express");
const middleware = express();
const error = require("../controllers/error");

middleware.get("*", error.index);

// modul yang dieksport
module.exports = middleware;
