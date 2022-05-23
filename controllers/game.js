// fungsi membaca halaman game
function index(req, res) {
    res.render("main/game");
}

// modul ekspor
module.exports = {
    index,
};
