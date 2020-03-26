var express = require('express');
var router = express.Router();
const sql = require('mssql');

const config = {
    user: '4dd_20',  //Vostro user name
    password: 'xxx123##', //Vostra password
    server: "213.140.22.237",  //Stringa di connessione
    database: '4dd_20', //(Nome del DB)
}

function executeQuery(res, query)
{
    sql.connect(config, function(err)
    {
        if(err)
        {
            console.log("Error while connecting to database");
            res.status(500, "Error while connecting to database");
        }
        else
        {
            let request = new sql.Request();
            request.query(query, function(err, result)
            {
                if(err)
                {
                    console.log("Error while executing the query");
                    res.status(500, "Error while executing the query");
                }
                else
                {
                    res.send(result.recordset);
                }
            })
        }
    })
}

router.get('/all', function(req, res)
{
    let query = "SELECT * FROM [cr-unit-attributes]";
    executeQuery(res, query);
})

router.get('/search', function(req, res)
{

    let query = `SELECT * FROM [cr-unit-attributes] WHERE Unit = '${req.query.unit}'`;//SQLInjection, pazienza.
    //console.log(query);
    executeQuery(res, query);
})

router.post('/add', function(req, res)
{
    let unit = req.body;
    let query = `INSERT INTO dbo.[cr-unit-attributes] (Unit,Cost,Speed, Hit_Speed, Deploy_Time, Range, Target, Count, Transport, Type, Rarity) 
    VALUES ('${unit.Unit}','${unit.Cost}',' ${unit.Speed}','${unit.Hit_Speed}','${unit.Deploy_time}',' ${unit.Range}',' ${unit.Target}',' ${unit.Count}',' ${unit.Transport}',' ${unit.Type}',' ${unit.Rarity}')`;
    executeQuery(res, query);
})

module.exports = router;
