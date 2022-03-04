
const express = require('express')
const app = express()
// const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const loginRouter = require('./routes/login.js');
app.use("/login", loginRouter);

const pubRouter = require('./routes/publisher.js');
app.use("/publisher", pubRouter);

const userRouter = require('./routes/user.js');
app.use("/user", userRouter);



app.listen(3001, () => {
    console.log("Server running on port 3001")
})