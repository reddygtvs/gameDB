
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'TUshar123',
    database: 'gameDB',
});

app.post("/create", (req, res) => {
    const game = req.body.game;
    const size = req.body.size;
    const publisher = req.body.publisher;
    const region = req.body.region;
    const year = req.body.year;

    db.query(
        "INSERT INTO games (game, size, publisher, region, year) VALUES (?,?,?,?,?)",
        [game, size, publisher, region, year],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    );
});



app.listen(3001, () => {
    console.log("Server running on port 3001")
})