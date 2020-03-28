var express = require('express');
var router = express.Router();

const sql = require('mssql');
/* GET users listing. */
const config = {
    user: '4dd_20', //Vostro user name
    password: 'xxx123##', //Vostra password
    server: "213.140.22.237", //Stringa di connessione
    database: '4dd_20', //(Nome del DB)
}
let executeQueryAll = function(res, next, pageName) {
    sql.connect(config, function(err) {
        if (err) { //Display error page
            console.log("Error while connecting database :- " + err);
            res.status(500).json({ success: false, message: 'Error while connecting database', error: err });
            return "err";
        }
        var request = new sql.Request(); // create Request object
        request.query("select * from [dbo].[cr-unit-attributes]", function(err, result) { //Display error page
            if (err) {
                console.log("Error while querying database :- " + err);
                res.status(500).json({ success: false, message: 'Error while querying database', error: err });
                sql.close();
                return "err";
            }
            //sql.close();
            console.log(result.recordset)
            render(pageName, result.recordset, res) //Il vettore con i dati è nel campo recordset (puoi loggare result per verificare)
        });
    });
}
let executeQuerySingle = function(res, unit, next, pageName) {
    sql.connect(config, function(err) {
        if (err) { //Display error page
            console.log("Error while connecting database :- " + err);
            res.status(500).json({ success: false, message: 'Error while connecting database', error: err });
            return "err";
        }
        var request = new sql.Request(); // create Request object
        request.query(`select * from [dbo].[cr-unit-attributes] where Unit = '${unit}'`, function(err, result) { //Display error page
            if (err) {
                console.log("Error while querying database :- " + err);
                res.status(500).json({ success: false, message: 'Error while querying database', error: err });
                sql.close();
                return "err";
            }
            //sql.close();
            render(pageName, result.recordset[0], res)
        });
    });
}
let executeQueryAdd = function(res, query, unit, next) {
    sql.connect(config, function(err) {
        if (err) { //Display error page
            console.log("Error while connecting database :- " + err);
            res.status(500).json({ success: false, message: 'Error while connecting database', error: err });
            return;
        }
        var request = new sql.Request(); // create Request object
        request.query(query, function(err, result) { //Display error page
            if (err) {
                console.log("Error while querying database :- " + err);
                res.status(500).json({ success: false, message: 'Error while querying database', error: err });
                sql.close();
                return;
            }
            sql.close();
            executeQuerySingle(res, unit, next, "single_unit")
        });
    });
}
let render = function(pageName, data, res) {
    res.render(pageName, { data: data })
}

router.get('/all', function(req, res, next) {
    executeQueryAll(res, next, "all_units");
});
router.get('/search', function(req, res, next) {
    executeQuerySingle(res, req.query.unit, next, "single_unit")
})
router.get('/add', function(req, res, next) {
    res.render("add")
})
router.post('/add', function(req, res, next) {
    let unit = req.body;
    if (!unit) {
        res.status(500).json({ success: false, message: 'Error while connecting database', error: err });
        return;
    }
    let sqlInsert = `INSERT INTO dbo.[cr-unit-attributes] (Unit,Cost,Speed, Hit_Speed, Deploy_Time, Range, Target, Count, Transport, Type, Rarity) 
                     VALUES ('${unit.Unit}','${unit.Cost}',' ${unit.Speed}','${unit.Hit_Speed}','${unit.Deploy_time}',' ${unit.Range}',' ${unit.Target}',' ${unit.Count}',' ${unit.Transport}',' ${unit.Type}',' ${unit.Rarity}')`;
    executeQueryAdd(res, sqlInsert, unit.Unit, next);
})
module.exports = router;