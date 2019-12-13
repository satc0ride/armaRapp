exports.success = function (req, res, msj, status){
    res.status(status).send({
        "body" : req.headers,
        "response" : "oki doki"
    })    
}