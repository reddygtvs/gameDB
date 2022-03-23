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
router.get("/getgames",(req,res)=>{
    db.query(`SELECT g.gid,g.gName,g.size,g.region,g.gametype,g.pubname,ug.username
                FROM games g, usergames ug
                WHERE g.gid = ug.gid`,(err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    
})
// router.get("/game_get",(req,res)=>{
//     let sql = `SELECT g.gid,g.gName,g.size,g.region,g.gametype,ug.username
//                FROM games g, usergames ug
//                WHERE g.gid = ug.gid`
//     db.query(sql,(err,result)=>{
//         if(err){
//             return res.status(400).json({error: err})
//         }
//         res.status(200).json(result)
//     })
// })
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
    db.query("SELECT * FROM usergames",(err,result) => {
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