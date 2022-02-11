const router= require('express').Router()

const cors = require('cors');
const db = require('./database');
router.use(cors());

// router.use(express.json());

router.post("/registerpub",(req,res) => {
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

router.post("/registeruser",(req,res) => {
    const username = req.body.pubname;
    const email = req.body.email;
    const pass = req.body.pass;
    db.query("INSERT INTO user (username,email,pass) VALUES(?,?,?) ",
    [username,email,pass],
    (err,result) => {
        console.log(result);
    }
    );
});

router.post("/loginpub",(req,res) => {
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

router.post("/loginuser",(req,res) => {
    const username = req.body.pubname;
    // const email = req.body.email;
    const pass = req.body.pass;
    db.query("SELECT * FROM user WHERE username = ? AND pass = ?",
    [username,pass],
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