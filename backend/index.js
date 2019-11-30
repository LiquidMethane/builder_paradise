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

router.route('/product/:partNo')
    .get((req, res) => {
        let partNo = req.params.partNo;
        let type = null;
        let part = null;
        db.query(`select partType from part where partNo = ${partNo}`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            type = result[0].partType;
            db.query(`select * from ${type} inner join part using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                part = new Object(result[0]);
                part.partType = type;
                return res.send(part);
            })
        })
    });

router.route('/product/cpu')
    .get((req, res) => { //fetch all cpu 
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pccpu using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {
            db.query('select * from part inner join pccpu using (partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/cooler')
    .get((req, res) => { //fetch all cooler
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pccooler using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {
            db.query('select * from part inner join pccooler using (partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/memory')
    .get((req, res) => { //fetch all memory
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pcmemory using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {

            db.query('select * from part inner join pcmemory using(partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/gpu')
    .get((req, res) => { //fetch all gpu
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pcgraphicscard using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {

            db.query('select * from part inner join pcgraphicscard using(partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/case')
    .get((req, res) => { //fetch all case
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pccase using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {

            db.query('select * from part inner join pccase using(partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/storage')
    .get((req, res) => { //fetch all storage
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pcstorage using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {

            db.query('select * from part inner join pcstorage using(partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/mb')
    .get((req, res) => { //fetch all motherboard
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pcmotherboard using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {

            db.query('select * from part inner join pcmotherboard using(partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/product/psu')
    .get((req, res) => { //fetch all powersupply
        let partNo = req.query.partNo;

        //partNo is given
        if (partNo) {
            db.query(`select * from part inner join pspowersupply using (partNo) where partNo = ${partNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result[0]);
            });

            //partNo is not given
        } else {

            db.query('select * from part inner join pcpowersupply using(partNo);', (err, result) => {
                if (err) return res.status(500).send(err.message);
                res.send(result);
            });
        }
    })

router.route('/user/validate') //validate user 
    .post((req, res) => {
        let email = req.body.email;
        let pass = req.body.pass;

        db.query(`select * from user where userEmail = '${email}'`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            console.log(result[0]);
            console.log(pass);
            if (result.length == 0)
                return res.status(400).send('Validation Failed.');
            else if (pass == result[0].userPass) {
                res.json({ user_id: result[0].userId });
            } else {
                res.status(400).send('Validation Failed.');
            }
        });
    });


router.route('/product/search')
    .get((req, res) => {
        let keyword = req.query.keyword;
        db.query(`select partNo, partName
        from part inner join 
        (select partNo, caseType as searchable from pccase
        union
        select partNo, coolerType as searchable from pccooler
        union
        select partNo, concat(coreCount, ' ', coreClock, ' ', tdp) as searchable from pccpu
        union
        select partNo, concat(chipset, ' ', memoryCapacity, ' ', coreClock) as searchable from pcgraphicscard
        union
        select partNo, concat(capacity, ' ', speed, ' ', sticks) as searchable from pcmemory
        union
        select partNo, concat(mSocket, ' ', formFactor, ' ', ramSlot, ' ', maxRam) from pcmotherboard
        union
        select partNo, wattage as searchable from pcpowersupply
        union
        select partNo, concat(sType, ' ', capacity) as searchable from pcstorage) as searchables using (partNo)
        where searchable like '%${keyword}%' or partName like '%${keyword}%';`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send(result);
        });
    });

router.route('/product/price/:partNo')
    .get((req, res) => {
        let partNo = req.params.partNo;

        db.query( `select * from inventory where partNo = ${partNo} order by storeNo, inventoryDate;`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            return res.send(result);
        })
    })

router.route('/store')
    .get((req, res) => {
        db.query(`select * from store`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            return res.send(result);
        })
    })

router.route('/build')
    .get((req, res) => { //fetch the first 20 builds from build table

        let buildNo = req.query.buildNo;
        if (buildNo) {
            db.query(`select * from buildpart inner join part using (partNo) where buildNo = ${buildNo}`, (err, result) => {
                if (err) return res.status(500).send(err.message);
                return res.send(result);
            })
        } else {
            db.query('select * from build order by rand() limit 20;', (err, result) => {
                if (err) return res.status(500).send(err.message);
                return res.send(result);
            });
        }


    })

    .put((req, res) => { //insert a build into db
        let build_name = req.body.build_name;
        let user_id = req.body.user_id;

        db.query(`insert into build values (null, '${build_name}', ${user_id})`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send('Build Created.');
        });
    });



router.route('/build/add-part/:buildNo') //insert a part into a build
    .put((req, res) => {
        let partNo = req.body.partNo;
        let buildNo = req.params.buildNo;
        db.query(`insert into buildpart values (${buildNo}, ${partNo})`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send('Part Added.');
        });
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


router.route('/fav-part/:user_id') //fetch all fav parts for a user with the lowest available price
    .get((req, res) => {
        let user_id = req.params.user_id;
        db.query(`select partNo, partName, min(price)
        from userfavouritepart inner join part using (partNo) inner join inventory using (partNo)
        where inventoryDate = '2019-12-01' and userId = ${user_id} and price > 0
        group by partNo`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send(result);
        });
    });

app.use('/', express.static('static'));
app.use('/api', router);

app.listen(port);
console.log(`Listening on port ${port}`);