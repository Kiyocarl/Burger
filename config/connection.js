// require dependencies 
const mysql = require("mysql");

const PORT = process.env.PORT || 3000;
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rxqotajl2ub11ue1",
    password: "g7pb67ijfxitbalq",
    database: "hxbxdxk7qm5l6dhh"
  });
}

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

