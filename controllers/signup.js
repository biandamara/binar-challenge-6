// membaca file database users
let users = require("../db/users.json");

// fungsi membaca halaman register
function index(req, res) {
    res.render("main/signup");
}

// modul ekspor
module.exports = {
    index,
};
