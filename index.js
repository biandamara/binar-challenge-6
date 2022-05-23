const express = require("express");
const app = express();
const port = 3000;

// module router
const routes = require("./routes/router");
const middleware = require("./utils/middleware");

// menjalakan module
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// menjalankan module ekspor
app.use(routes);
app.use(middleware);

// menjalankan server lokal
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
