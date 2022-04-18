// fungsi membaca halaman index
function index(req, res) {
    res.render("index");
}

// modul yang dieksport
module.exports = {
    index,
};
