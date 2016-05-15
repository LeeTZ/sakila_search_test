// database connection setup, should be made global
/*var mysql = require('mysql');
connection      =         mysql.createConnection({
        host        :         "localhost",
        user        :         "root",
        password    :         "",
        database     :         "sakila"
});
connection.connect();
*/

// database connection setup, should be made global
var mysql = require('mysql');
connection      =         mysql.createConnection({
        host        :         "us-cdbr-iron-east-04.cleardb.net",
        user        :         "bc929804294e20",
        password    :         "ef99ee42",
        database     :        "heroku_468468891c6d425"
});
connection.connect();


