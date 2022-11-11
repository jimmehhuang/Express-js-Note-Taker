const fs = require("fs");
const path = require("path");

const app = require('express').Router();

fs.readFile("./Develop/db/db.json","utf8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data);
    
    // notes GET route
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    });

    // notes POST route
    app.post('/api/notes', function(req, res) {
        let newNote = req.body;
        notes.push(newNote);
        updateDb();
        return console.log(`New note added: ${newNote.title}`);
    });

    // Retrieves note with specified id*
    app.get('/api/notes/:id', function(req,res) {
        // show array of notes and id's
        res.json(notes[req.params.id]);
    });

    // display notes.html
    app.get('/notes', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
        
    // display index.html
    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //updates json file whenever note is added or deleted
    function updateDb() {
        fs.writeFile("Develop/db/db.json",JSON.stringify(notes,'\t'),err => {
            if (err) throw err;
            return true;
        });
    }
});

module.exports = app;