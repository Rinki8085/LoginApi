var express = require('express');
var app = express();
var db = require('./db');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT||PORT;
var cors = require('cors');
app.use(cors());

const AuthController = require('./auth/authController');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`Listning port no ${port}`)
})