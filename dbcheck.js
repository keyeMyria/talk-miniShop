var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "new_schema",
});

//con.connect(function(err) {
  //if (err) throw err;
  //console.log("Connected!");
//});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected 123!");
  var sql = 'select * from package_details';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
	console.log(JSON.stringify(result));
  });
});