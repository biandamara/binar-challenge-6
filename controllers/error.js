// fungsi membaca halaman error
function index(req, res) {
    res.status(404);
    res.render("error");
}

// modul ekspor
module.exports = {
    index,
};
