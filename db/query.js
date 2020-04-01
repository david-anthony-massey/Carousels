<<<<<<< HEAD
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "mybb.cfpgvexeasco.us-east-2.rds.amazonaws.com",
  user: "reku68",
  password: "password",
  database: "canadaamazon",
  port: 3306
=======
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database-1.cjiyvvurlpmp.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'password',
  database: 'saskatchewanizon',
  port: 3306,
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea
});

connection.connect();

<<<<<<< HEAD
const getProducts = (categoryId, callback) => {
  if (categoryId == "0") {
    connection.query(`SELECT * FROM Products;`, (err, data) => {
=======
const getProducts = (productId, callback) => {
  if (productId == '0') {
    connection.query(`SELECT * FROM itemData;`, (err, data) => {
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  } else {
<<<<<<< HEAD
    connection.query(
      `SELECT * FROM Products WHERE category_id = ('${categoryId}');`,
      (err, data) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      }
    );
  }
};
=======
    connection.query(`SELECT * FROM itemData WHERE categoryID = (SELECT categoryId FROM itemData WHERE productId = ('${productId}'));`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};

// `SELECT * FROM itemData WHERE categoryId = (SELECT categoryId FROM itemData WHERE productId = ${productId});`
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea

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

<<<<<<< HEAD
connection.query("SELECT 1 + 1 AS solution", function(error, results) {
=======
connection.query('SELECT 1 + 1 AS solution', (error, results) => {
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

module.exports = { getProducts };
