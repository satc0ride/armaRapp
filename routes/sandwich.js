'use strict';
var express = require('express');
var router = express.Router();
var response = require('../network/response');
var dbsandwich = require('../lib/dbsandwich');
/* GET home page. */
router.get('/', function (req, res) {
    res.send('{..}');
    }
);
router.post('/', function (req, res) {
    dbsandwich.validateSandwich(req,res).then(validate => {
        response.success(res, validate, 201, "Creado con éxito");
    }).catch(err =>{
        console.log(err);
        response.error(res, err.data, err.status, "Error validando usuario")
    });
    

    
});

module.exports = router;
