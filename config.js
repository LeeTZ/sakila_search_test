// database connection setup, should be made global
var mysql = require('mysql');
connection      =         mysql.createConnection({
        host        :         "localhost",
        user        :         "root",
        password    :         "",
        database     :         "sakila"
});
connection.connect();