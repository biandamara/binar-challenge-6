// fungsi membaca halaman game
function index(req, res) {
    res.render("game");
}

// modul yang dieksport
module.exports = {
    index,
};
