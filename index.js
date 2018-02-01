
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('session');
//routes headers
const home = require('./routes/home');
const logIn = require('./routes/logIn');
const logOut  = require('./routes/logOut');
const signUp = require('./routes/signUp');

//mongoose setup

//set up session

//use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.get('/',home);
app.get('/login',logIn);
app.get('/logOut',logOut);
app.get('/signUp',signUp);

app.listen(5500,function(){
    console.log("workking");
});