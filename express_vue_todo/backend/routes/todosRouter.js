const db = require('../lib/db.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  db.query('SELECT * FROM todo', (err, todos) => {
    res.send(todos)
  })
});

router.post('/write', (req, res, next) => {
  console.log(req.body)
  let item = req.body;
  // db.query(`INSERT INTO todo (title,description,created) VALUES(${item.todoName},'', NOW())`, (err, todos) => {
  //   res.redirect(`/`);
  // })
  res.redirect(`/todos`)
})


module.exports = router;