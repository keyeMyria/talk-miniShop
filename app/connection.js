'use strict';
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Talkcommerce",
});
con.connect(function(err) {
  if (err) throw err;
});

function getDb() {
  return con;
}

module.exports = {
  getDb
};
