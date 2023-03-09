const express = require("express");
const path = require("path");
const htmlRoute = require("");
const apiRoute = require("");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("Develop/public"));
app.use("/", htmlRoute);
app.use("/api", apiRoute);

app.listen(PORT, () =>
    console.log(`This app is listening at http://localhost:${PORT} yay!`));