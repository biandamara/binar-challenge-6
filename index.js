const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

// memanggil module route
const route = require("./controllers/route");

// menjalakan module
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
app.set("view engine", "ejs");

// menjalankan module eksport
app.use(route);

// menjalankan middleware error
app.use("/", (req, res) => {
    res.status(404);
    res.render("error");
});

// menjalankan server lokal
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
