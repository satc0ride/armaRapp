var executeQuery = require('../lib/db');


const promise = require('../timeoutPromise');


exports.validateSandwich = async function (req, res) {
    return new Promise((resolve,reject) => {
        
        console.log("Solicitando validacion")
        var cerr={
            "data": null,
            "status" : null
        }
        
        const validar = function() {
            return new Promise((resolve,reject) => {

            var query =  `select * from tabla`
            executeQuery(res,query).then(resul =>{
                    resolve(resul)
                    //res.render('index', { title: resul })
                }).catch(ferr =>{
                    cerr.data = "Error de Acceso"   //'Error de Acceso'
                    cerr.status = 401
                    reject(cerr)
            });
        });
    }
    
    var carrera = promise.promiseTimeout(2500,validar())

    carrera.then((data) => {
        resolve(data)
     }).catch(err => {
         cerr.data = ("Time OUT") 
         cerr.status = 401
         reject(cerr)
     })
        
    });}
        // p1.catch(error => { 
        //     err.data = 'Time out bd'
        //     err.status = 505
        //     console.log(error);
        //     reject(err) 
        // });
    



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