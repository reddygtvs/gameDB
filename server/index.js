
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
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

app.get("/games", (req, res) => {
    db.query("SELECT * FROM games", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }

    })
})

app.put("/update",(req,res) => {
    const id = req.body.id;
    const game= req.body.game;
    db.query("UPDATE games SET game = ? WHERE id = ? ",
    [game,id],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    );
})


app.delete("/delete/:id",(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM games WHERE id = ? ", id ,(err,result) => 
    {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    )
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})