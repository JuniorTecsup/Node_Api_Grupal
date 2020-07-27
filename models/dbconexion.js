var cors = require('cors');
var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user:"hba90vutj8x99kac",
  password:"np0qawe93yjdcgld",
  database:"b83b60bwal8v2w60"//persona1
});

conn.connect();
module.exports = conn;
