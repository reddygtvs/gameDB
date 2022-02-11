const router= require('express').Router()

const cors = require('cors');
const db = require('./database');
router.use(cors());

// router.use(express.json());

router.post("/register",(req,res) => {
    const pubname = req.body.pubname;
    const email = req.body.email;
    const pass = req.body.pass;
    db.query("INSERT INTO publisher (pubname,email,pass) VALUES(?,?,?) ",
    [pubname,email,pass],
    (err,result) => {
        console.log(result);
    }
    );
});

router.post("/login",(req,res) => {
    const pubname = req.body.pubname;
    // const email = req.body.email;
    const pass = req.body.pass;
    db.query("SELECT * FROM publisher WHERE pubname = ? AND pass = ?",
    [pubname,pass],
    (err,result) => {
        if (err) {
            res.send({err: err})
        }
        if (result.length > 0) {
            res.send(result)
            
        } else {
            res.send({message: "Wrong username/password combination"})
        }
    }
    );
});



module.exports = router;