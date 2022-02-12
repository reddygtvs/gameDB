const router= require('express').Router()

const cors = require('cors');
const db = require('./database');
router.use(cors());

router.post("/create",(req,res) => {
    const gName= req.body.game;
    const size= req.body.size;
    const region= req.body.region;
    const gametype= req.body.genre;
    const year = req.body.year;
    const publisher = req.body.publisher

    db.query("INSERT INTO games (gName,size,region,gametype,year,pubname) VALUES(?,?,?,?,?,?)",
    [gName,size,region,gametype,year,publisher],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    );
});

router.post("/games", (req, res) => {
    const usernamedisplay = req.body.usernamedisplay
    db.query("SELECT * FROM games WHERE pubname = ?",
    [usernamedisplay], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }

    })
})

router.put("/update",(req,res) => {
    const gid = req.body.gid;
    const gName= req.body.game;
    db.query("UPDATE games SET gName = ? WHERE gid = ? ",
    [gName,gid],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    );
})

module.exports = router;