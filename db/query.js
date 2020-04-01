var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "mybb.cfpgvexeasco.us-east-2.rds.amazonaws.com",
  user: "reku68",
  password: "password",
  database: "canadaamazon",
  port: 3306
});

connection.connect();

const getProducts = (productId, callback) => {
  if (categoryId == "0") {
    connection.query(`SELECT * FROM Products;`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  } else {
    connection.query(`SELECT * FROM Products WHERE category_id = (SELECT category_id FROM Products WHERE id = ('${productId}'));`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};

// `SELECT * FROM itemData WHERE categoryId = (SELECT categoryId FROM itemData WHERE productId = ${productId});`

// const addProduct = (product, callback) => {
//   connection.query(`INSERT INTO itemData (productId,...) VALUES ('${product}',...);`, (err, data) => {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, data)
//     }
//   })
// }

// const deleteProduct = (productId, callback) => {
//   connection.query(`DELETE FROM itemData WHERE productId=('${productId}');`, (err, data) => {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, data)
//     }
//   })
// }

connection.query("SELECT 1 + 1 AS solution", function(error, results) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

module.exports = { getProducts };
