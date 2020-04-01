const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("../db/query.js");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.get('/getProducts/:productId', (req, res) => {
  const productId = req.params.productId;
  db.getProducts(productId, (err, results) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.send(results);
    }
  });
});

// app.post('/addProduct', (req, res) => {
//   const product = req.body.product;
//   db.addProduct(product, (err, results) => {
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