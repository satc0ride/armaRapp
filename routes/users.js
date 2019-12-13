'use strict';
var express = require('express');
var router = express.Router();
var response = require('../network/response');
/* GET users listing. */
router.get('/', function (req, res) {
    // res.header({
    //     "hola":"mundo"
    // })   
    // res.status(201).send("ok");
    response.success(req, res, "Usuarios", 201)
});

module.exports = router;
