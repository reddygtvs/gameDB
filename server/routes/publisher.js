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

module.exports = router;