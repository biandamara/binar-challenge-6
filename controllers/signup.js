// membaca file database users
users = require("../db/users.json");

// fungsi membaca halaman register
function index(req, res) {
    res.render("signup");
}

// modul yang dieksport
module.exports = {
    index,
};
