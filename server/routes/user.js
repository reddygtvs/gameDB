const router= require('express').Router()

const cors = require('cors');
const db = require('./database');
router.use(cors());



router.get("/getgames",(req,res)=>{
    db.query(`SELECT g.gid,g.gName,g.size,g.region,g.gametype,g.pubname,ug.usergid
                FROM games g, usergames ug
                WHERE g.gid = ug.gid`,(err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    
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


router.delete("/delete/:usergid",(req,res) => {
    const usergid = req.params.usergid;
    db.query("DELETE FROM usergames WHERE usergid = ? ", usergid ,(err,result) => 
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