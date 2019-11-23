const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = process.env.PORT || 8080;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2333',
    //database: 'builder_paradise'
})

db.connect(function(err) {
    if (err) throw err;
    else console.log('connected to database.');
    
});


db.query('SELECT * FROM builder_paradise.build WHERE buildNo < 10;', function (err, result) {
    if (err) console.log(err.message);
    console.log("Result: " + result);
  });

app.use('/', express.static('static'));
app.listen(port);