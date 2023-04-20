const express = require("express");
const path = require("path");
const htmlRoute = require("./Develop/routes/htmlRoute");
const apiRoute = require("./Develop/routes/apiRoute");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("Develop/public"));
app.use("/", htmlRoute);
app.use("/api", apiRoute);

app.listen(PORT, () =>
    console.log(`This app is listening at http://localhost:${PORT} yay!`));