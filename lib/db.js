
const sql = require('mssql')
const dbConfig = require('./cnn')
var ferr = {
    err:"",
    data:""
}


var  executeQuery = async function(res, query){ 
    return new Promise((resolve,reject) => {
        
        sql.connect(dbConfig, function (err) {
            if (err) {   
                console.log("Error while connecting database :- " + err);
                reject(err);
                }
                else {
                    // create Request object
                    var request = new sql.Request();
                    // query to the database
                    request.query(query, function (err, res) {
                    if (err) {
                        console.log("Error while querying database :- " + err);

                        reject(err);
                    }
                    else {
                        if(res.rowsAffected==1){
                            resolve(res.recordset);
                        }else if (res.rowsAffected>1) {
                            resolve(res.recordsets)
                        }
                    }
                    });
                }
            });           
    } 

    )};


module.exports = executeQuery;

