// fungsi membaca halaman index
function index(req, res) {
    res.render("main/index");
}

// modul ekspor
module.exports = {
    index,
};
