// membaca file database users
users = require("../db/users.json");

// fungsi membaca halaman login
function index(req, res) {
    res.render("main/login");
}

// fungsi membaca data users
function getUser(req, res) {
    res.status(200).json(users);
}

// fungsi membaca data user bsedasarkan id
function getUserId(req, res) {
    const data = users.findIndex((item) => {
        return item.id == req.query.id;
    });

    // data user tidak ditemukan
    if (!data) {
        res.status(404).json({
            message: "User Not Found",
        });
    }

    res.status(200).json(data);
}

// fungsi login
function getLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const dataUsers = users.findIndex((usersInput) => {
        return usersInput.email === email;
    });

    // username tidak sesuai
    if (dataUsers == -1) {
        res.status(403).json({
            message: "Your are not registered",
        });
    }

    // password user tidak sesuai
    else {
        if (users[dataUsers].password != password) {
            res.status(403).json({
                message: "Wrong Password",
            });
        }

        // username dan password sesuai
        else {
            res.status(200).json({
                message: "Login Successful",
            });
        }
    }
}

// modul ekspor
module.exports = {
    index,
    getUser,
    getUserId,
    getLogin,
};
