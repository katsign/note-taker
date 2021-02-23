const fs = require('fs');

// Accesses JSON route
module.exports = (app) => {
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    });
});

// Saves new notes to JSON database
app.post('/api/notes', (req, res) => {
    const userNotes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(userNotes);
        let number = 1;
        dbData.forEach((note, index) => {
            note.id = number;
            number++;
            return dbData;
        });
        console.log(dbData);

        stringData = JSON.stringify(dbData);

        fs.writeFile('./db/db.json', stringData, (err, data) => {
            if (err) throw err;
        });
    });
    res.status(204).send();
});

};