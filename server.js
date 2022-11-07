const express = require("express");
const fs = require ("fs");
const path = require("path");

const routes = require('./Develop/routes/routes.js');
// initialize express and host server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})