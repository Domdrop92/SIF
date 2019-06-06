import { createConnection } from 'mysql';
var express= require('express');
var app= express();
var con= createConnection({
    host: "localhost",
    user: "root",
    password: "#Kandie8788",
    database: "sampledb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, 
result) {
        if (err) throw err;
        console.log("Result: " + 
result);
    });
    
});
app.get('/', function(req, resp){

})
app.listen(3306);