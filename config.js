// database connection setup, should be made global
var mysql = require('mysql');

function handleDisconnect() {
    // server
    /*
    connection      =         mysql.createConnection({
            host        :         "us-cdbr-iron-east-04.cleardb.net",
            user        :         "bc929804294e20",
            password    :         "ef99ee42",
            database     :        "heroku_468468891c6d425"
    });
    */
    // local
    connection      =         mysql.createConnection({
        host        :         "localhost",
        user        :         "root",
        password    :         "",
        database     :         "sakila"
    });

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();