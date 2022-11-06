const express = require("express");
const fs = require ("fs");
const path = require("path");

const routes = require('./routes/index');
// initialize express and host server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})