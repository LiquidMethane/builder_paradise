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

router.route('/product/part/:partNo')
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

router.route('/user') //validate user 
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
                res.json({ user_id: result[0].userId, user_nickname: result[0].userNickname });
            } else {
                res.status(400).send('Validation Failed.');
            }
        });
    })
    .put((req, res) => {
        let email = req.body.email;
        let pass = req.body.pass;
        let username = req.body.username;
        db.query(`insert into user values (null, '${email}', '${username}', '${pass}')`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.json('New Account Created.');
        })
    })


router.route('/product/search')
    .get((req, res) => {
        let keyword = req.query.keyword;
        db.query(`select partNo, partName, specs
        from part inner join 
        (select partNo, caseType as searchable, concat('type: ', caseType) as specs from pccase
        union
        select partNo, coolerType as searchable, concat('type: ', coolerType) as specs from pccooler
        union
        select partNo, concat(coreCount, ' ', coreClock, ' ', tdp) as searchable, concat('Core Count: ', coreCount, ' Core Clock: ', coreClock, ' GHz TDP: ', tdp, ' watts') as specs from pccpu
        union
        select partNo, concat(chipset, ' ', memoryCapacity, ' ', coreClock) as searchable, concat('Chipset: ', chipset, ' Memory Capacity: ', memoryCapacity, ' GB Core Clock: ', coreClock, ' MHz') as specs from pcgraphicscard
        union
        select partNo, concat(capacity, ' ', speed, ' ', sticks) as searchable, concat('Capacity: ', capacity, ' GB Speed: ', speed, ' MHz Sticks: ', sticks) as specs from pcmemory
        union
        select partNo, concat(mSocket, ' ', formFactor, ' ', ramSlot, ' ', maxRam) as searchable, concat('Socket: ', mSocket, ' Form Factor: ', formFactor, ' RamSlots: ', ramSlot, ' Max Ram: ', maxRam) as specs from pcmotherboard
        union
        select partNo, wattage as searchable, concat('Wattage: ', wattage, ' watts ') as specs from pcpowersupply
        union
        select partNo, concat(sType, ' ', capacity) as searchable, concat('Type: ', sType, ' Capacity: ', capacity, ' GB') as specs from pcstorage) as searchables using (partNo)
        where searchable like '%${keyword}%' or partName like '%${keyword}%';`, (err, result) => {
            if (err) return res.status(400).send(err);
            res.send(result);
        });
    });

router.route('/product/price/:partNo')
    .get((req, res) => {
        let partNo = req.params.partNo;

        db.query(`select * from inventory where partNo = ${partNo} order by storeNo, inventoryDate;`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            return res.send(result);
        })
    })

router.route('/product/deals')
    .get((req, res) => {
        db.query(`select p.partNo, p.partName, s.storeNo, s.storeName, price
        from inventory as inv, store as s, part as p
        where inventoryDate = '2019-12-01' 
            and s.storeNo = inv.storeNo 
            and p.partNo = inv.partNo 
            and (inv.partNo, price) in 
                (select partNo, min(price)
                from inventory
                where price > 0
                group by partNo
                order by partNo, price asc);`, (err, result) => {
                    if (err) return res.status(400).send(err);
                    res.send(result);
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

    .post((req, res) => {
        let buildNo = req.query.buildNo;
        let buildName = req.body.buildName;
        db.query(`update build set buildName = '${buildName}' where buildNo = ${buildNo}`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.json('Build Name Updated.');
        })
    })

    .put((req, res) => { //insert a build into db
        let build_name = req.body.build_name;
        let user_id = req.body.user_id;

        db.query(`insert into build values (null, '${build_name}', ${user_id})`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.json('Build Created.');
        });
    });



router.route('/add-part/:buildNo') //insert a part into a build
    .put((req, res) => {
        let partNo = req.body.partNo;
        let buildNo = req.params.buildNo;
        db.query(`insert into buildpart values (${buildNo}, ${partNo})`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.json('Part Added.');
        });
    });

router.route('/build/:user_id')
    .get((req, res) => { //fetch all builds for a user_id
        db.query('select buildNo, buildName from build where userId = ' + req.params.user_id + ';', (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.send(result);
        })
    });

router.route('/remove-part/:buildNo')
    .delete((req, res) => {
        let buildNo = req.params.buildNo;
        let partNo = req.query.partNo;
        db.query(`delete from buildpart where buildNo = ${buildNo} and partNo = ${partNo}`, (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.json('Part Deleted From Build.');
        })
    })


router.route('/build/price-list/:buildNo') //fetch price from each store in ascending order
    .get((req, res) => {
        let buildNo = req.params.buildNo;
        db.query(`select storeNo, storeName, sum(price) as total
        from inventory inner join store using (storeNo) inner join buildpart using (partNo)
        where storeNo in 
            (select inv.storeNo
            from inventory as inv
            where inv.price > 0 and inv.inventoryDate = '2019-12-01' and inv.partNo in (select partNo from buildpart where buildNo = ${buildNo})
            group by inv.storeNo
            having count(inv.partNo) = (select count(partNo) from buildpart where buildNo = ${buildNo}))
        and buildNo = ${buildNo} and inventoryDate = '2019-12-01'
        group by storeNo
        order by total asc`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send(result);
        });
    });


router.route('/fav-part/:user_id') //fetch all fav parts for a user with the lowest available price
    .get((req, res) => {
        let user_id = req.params.user_id;
        db.query(`select partNo, partName, storeNo, min(price) as low
        from userfavouritepart inner join part using (partNo) inner join inventory using (partNo)
        where inventoryDate = '2019-12-01' and userId = ${user_id} and price > 0
        group by partNo`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send(result);
        });
    })

    .put((req, res) => {
        let user_id = req.params.user_id;
        let partNo = req.body.partNo;
        db.query(`insert into userfavouritepart values ( ${user_id}, ${partNo})`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            console.log(result);
            res.send(result);
        })
    })


router.route('/popular-part')
    .get((req, res) => {
        db.query(`select partNo, partName, count(partNo) as occurance
        from buildpart inner join part using (partNo)
        group by partNo
        order by occurance desc
        limit 50;`, (err, result) => {
            if (err) return res.status(400).send(err.message);
            res.send(result);
        });
    })


app.use('/', express.static('static'));
app.use('/api', router);

app.listen(port);
console.log(`Listening on port ${port}`);