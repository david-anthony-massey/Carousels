var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "mybb.cfpgvexeasco.us-east-2.rds.amazonaws.com",
  user: "reku68",
  password: "password",
  database: "canadaamazon",
  port: 3306
});

connection.connect();

const getProducts = (categoryId, callback) => {
  if (categoryId == "0") {
    connection.query(`SELECT * FROM Products;`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  } else {
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

// const createTask = (item, callback) => {
//   connection.query(`INSERT INTO tasks (task) VALUES ('${item}');`, (err, data) => {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, data)
//     }
//   })
// }

// const deleteTask = (item, callback) => {
//   connection.query(`DELETE FROM tasks WHERE id=('${item}');`, (err, data) => {
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
