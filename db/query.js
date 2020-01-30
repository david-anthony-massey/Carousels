const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'saskatchewanizon',
});

connection.connect();

const getProducts = (categoryId, callback) => {
  if (categoryId === '0') {
    connection.query(`SELECT * FROM itemData;`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  } else {
    connection.query(`SELECT * FROM itemData WHERE categoryID = ('${categoryId}');`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
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

connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = { getProducts };
