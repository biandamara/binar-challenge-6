const { user_game, user_game_biodata, user_game_history } = require("../models");

// fungsi membuat data user baru
function addUserGameIndex(req, res) {
    res.render("dashboard/create");
}

function addUserGame(req, res) {
    user_game
        .create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        .then((user_game) => {
            res.status(201);
        });
}

// fungsi mencari semua data user pada database
function allUserGame(req, res) {
    user_game.findAll().then((listUserGame) => {
        res.render("dashboard/dashboard", {
            listUserGame,
        });
    });
}

// fungsi mencari satu data user pada database
function oneUserGame(req, res) {
    user_game
        .findOne({
            where: {
                id: req.params.id,
            },
            include: {
                model: user_game_biodata,
            },
        })
        .then((dataUserGame) => {
            res.render("dashboard/detail", {
                dataUserGame,
            });
        });
}

// fungsi memperbaharui data user yang sudah ada
function updateUserGameIndex(req, res) {
    user_game
        .findOne({
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.render("/update", {
                data,
            });
        });
}

function updateUserGame(req, res) {
    user_game
        .update(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.phone,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
        .then(() => {
            res.send("User has been updated!");
        });
}

// fungsi menghapus data user yang sudah ada
function deleteUserGame(req, res) {
    user_game
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(() => {
            res.send("User has been deleted!");
        });
}

// perintah ekspor module
module.exports = {
    addUserGameIndex,
    addUserGame,
    allUserGame,
    oneUserGame,
    updateUserGameIndex,
    updateUserGame,
    deleteUserGame,
};
