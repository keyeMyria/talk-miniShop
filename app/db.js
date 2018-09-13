'use strict';

var db = require('./connection').getDb();
function getProducts() {
    var sql = 'select * from products';
    return new Promise((resolve, reject) => {
        return db.query(sql, function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
  });
}

module.exports = {
    getProducts
};
