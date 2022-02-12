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

module.exports = router;