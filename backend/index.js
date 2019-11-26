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
    password: 'potatoroot',
    database: 'builder_paradise'
})

//establish connection to the database
db.connect(function (err) {
    if (err) throw err;
    else console.log('connected to database.');

});

//log all api calls
router.use('/', (req, res, next) => {
    console.log(new Date() + ' : ' + req.method + ' ' + req.url);
    next();
});


router.route('/user/validate') //validate user 
    .post((req, res) => {
        let email = req.body.email;
        let pass = req.body.pass;

        db.query(`select * from user where userEmail = '${email}'`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            console.log(result[0]);
            console.log(pass);
            if (pass == result[0].userPass) {
                res.json({user_id: result[0].userId});
            } else {
                res.send('Validation Failed.');
            }
        });
    });

router.route('/product/cpu')
    .get((req, res) => { //fetch all cpu 
        db.query('select * from builder_paradise.part inner join builder_paradise.pccpu using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/cooler')
    .get((req, res) => { //fetch all cooler
        db.query('select * from builder_paradise.part inner join builder_paradise.pccooler using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/memory')
    .get((req, res) => { //fetch all memory
        db.query('select * from builder_paradise.part inner join builder_paradise.pcmemory using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/gpu')
    .get((req, res) => { //fetch all gpu
        db.query('select * from builder_paradise.part inner join builder_paradise.pcgraphicscard using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/case')
    .get((req, res) => { //fetch all case
        db.query('select * from builder_paradise.part inner join builder_paradise.pccase using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/storage')
    .get((req, res) => { //fetch all storage
        db.query('select * from builder_paradise.part inner join builder_paradise.storage using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/mb')
    .get((req, res) => { //fetch all motherboard
        db.query('select * from builder_paradise.part inner join builder_paradise.pcmotherboard using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/product/psu')
    .get((req, res) => { //fetch all powersupply
        db.query('select * from builder_paradise.part inner join builder_paradise.pcpowersupply using(partNo);', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

router.route('/build')
    .get((req, res) => { //fetch the first 20 builds from build table

        db.query('SELECT * FROM builder_paradise.build WHERE buildNo < 20;', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        });
    })

    .put((req, res) => {
        let build_name = req.body.build_name;
        let user_id = req.body.user_id;

        db.query(`insert into build values (null, '${build_name}', ${user_id})`);
    });

router.route('/build/:user_id')
    .get((req, res) => { //fetch all builds for a user_id
        db.query('select buildNo, buildName, partNo, partName from builder_paradise.build inner join builder_paradise.buildpart using (buildNo) inner join builder_paradise.part using (partNo) where userId = ' + req.params.user_id + ';', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        })
    });


router.route('/build/price-list/:build_id') //fetch price from each store in ascending order
    .get((req, res) => {
        let build_id = req.params.build_id;
        db.query(`select storeNo, storeName, sum(price) as total
        from inventory inner join store using (storeNo) inner join buildpart using (partNo)
        where storeNo in 
            (select inv.storeNo
            from inventory as inv
            where inv.price > 0 and inv.inventoryDate = '2019-12-01' and inv.partNo in (select partNo from buildpart where buildNo = ${build_id})
            group by inv.storeNo
            having count(inv.partNo) = (select count(partNo) from buildpart where buildNo = ${build_id}))
        and buildNo = ${build_id} and inventoryDate = '2019-12-01'
        group by storeNo
        order by total asc`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send(result);
        });
    });

app.use('/', express.static('static'));
app.use('/api', router);

app.listen(port);
console.log(`Listening on port ${port}`);