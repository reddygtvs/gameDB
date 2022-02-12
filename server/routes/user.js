const router= require('express').Router()

const cors = require('cors');
const db = require('./database');
router.use(cors());

router.get("/gamesall", (req, res) => {
    db.query("SELECT * FROM games", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }

    })
})
router.post("/idfetch", (req, res) => {
    db.query("SELECT * FROM games where gid = ?")
})
router.post("/create",(req,res) => {
    const username= req.body.username;
    const gid = req.body.gid;

    db.query("INSERT INTO usergames (username,gid) VALUES(?,?)",
    [username,gid],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    );
});

router.get("/usertables",(req,res) => {
    db.query("SELECT *FROM usergames",(err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

router.delete("/delete/:gid",(req,res) => {
    const gid = req.params.gid;
    db.query("DELETE FROM usergames WHERE gid = ? ", gid ,(err,result) => 
    {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    )
})

module.exports = router;