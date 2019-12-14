exports.success = function (res, data, status, msj){
    res.status(status || 200).send({
        "error" : "",
        "data": data,
        "response" : msj
    })    
}
exports.error = function (res, msj, status, details){
    //Manejador log
    console.error('[response error] '+ details)

    res.status(status || 501).send({
        "error" : msj,
        "responses" : ""
    })    
}