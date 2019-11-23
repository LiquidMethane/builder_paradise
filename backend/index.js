const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = process.env.PORT || 8080;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2333',
    //database: 'builder_paradise'
})

db.connect(function (err) {
    if (err) throw err;
    else console.log('connected to database.');

});

router.use('/', (req, res, next) => {
    console.log(new Date() + ' : ' + req.method + ' ' + req.url);
    next();
});

router.route('/')
    .get((req, res) => {
        //res.send('you have made an api call.');

        db.query('SELECT * FROM builder_paradise.build WHERE buildNo < 10;', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    });


router.route('/product/cpu')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pccpu using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/cooler')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pccooler using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/memory')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pcmemory using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/gpu')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pcgraphicscard using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/case')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pccase using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/storage')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.storage using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/mb')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pcmotherboard using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/psu')
    .get((req, res) => {
        db.query('select * from builder_paradise.part inner join builder_paradise.pcpowersupply using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })



app.use('/', express.static('static'));
app.use('/api', router);

app.listen(port);