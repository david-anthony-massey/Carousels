const express = require('express');
const path = require('path');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const db = require('../db/query.js')
const port = 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client/dist')));

app.get('/getItem', (req, res) => {
  db.getOneItem((err, results) => { 
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
})

app.get('/getImages', (req, res) => {
  db.getOneImages((err, results) => { 
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
})

// app.post('/tasks', (req, res) => { // .. // ...  req.body = ['shopping', 'gardening', 'laundry']
//   // console.log("This is the req on server side: ", req.body.e)
//   let task = req.body.newTask;

//   db.createTask(task, (err, results) => { 
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(results)
//     }
//   })
// })

// app.delete('/deleteTask/:id', (req, res) => {
//   console.log("What? ", req.params);
//   const id = req.params.id;

//   db.deleteTask(id, (err, results) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(results)
//     }
//   })
// })
    
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})