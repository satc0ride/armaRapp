'use strict';
var express = require('express');
var router = express.Router();
var executeQuery = require('../lib/db');

/* GET home page. */
router.get('/', function (req, res) {
    var query =  `select * from tabla`
    console.log(req.body)
    


//     `INSERT INTO [etarmadi_Armadillo].[tabla]
//     ([first_name]
//     ,[last_name])
// VAL
//     ('hola','mundo')`
        
    // `select * from tabla`
    // `CREATE TABLE tabla (
    //     visit_id INT PRIMARY KEY IDENTITY (1, 1),
    //     first_name VARCHAR (50) NOT NULL,
    //     last_name VARCHAR (50) NOT NULL
    // );`
    executeQuery(res,query).then(resul =>{
        //res.render('index', { title: resul })

        res.send(resul);
    }
    );
});
    

module.exports = router;
