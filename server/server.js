<<<<<<< HEAD
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("../db/query.js");
const port = process.env.PORT || 8080;
=======
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/query.js');

const port = 8001;
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "..", "client/dist")));

app.get("/getProducts/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  db.getProducts(categoryId, (err, results) => {
=======
app.use(express.static('client/dist'));

app.get('/carousel/getProducts/:productId', (req, res) => {
  const productId = req.params.productId;
  db.getProducts(productId, (err, results) => {
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.send(results);
    }
  });
});

<<<<<<< HEAD
// app.post('/tasks', (req, res) => { // .. // ...  req.body = ['shopping', 'gardening', 'laundry']
//   // console.log("This is the req on server side: ", req.body.e)
//   let task = req.body.newTask;

//   db.createTask(task, (err, results) => {
=======
// app.post('/addProduct', (req, res) => {
//   const product = req.body.product;
//   db.addProduct(product, (err, results) => {
>>>>>>> 6e78f9bf777f536ab611fe34aed72a1a525157ea
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(results)
//     }
//   })
// })

// app.delete('/deleteProduct/:productId', (req, res) => {
//   const productId = req.params.productId;
//   db.deleteProduct(productId, (err, results) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(results)
//     }
//   })
// })

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
