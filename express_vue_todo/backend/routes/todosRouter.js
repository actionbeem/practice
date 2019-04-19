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
  db.query(`INSERT INTO todo (title,description,created) VALUES(?,'', NOW())`, [item.todoName] , (err, todos) => {
    // res.redirect(`/todos`)
    res.send()
  })
});

router.post('/delete', (req, res, next) => {
  let target = req.body;
  console.log('t id: ',target.id)
  db.query(`DELETE FROM todo WHERE id=?`,[target.id], (err, result) => {
    res.redirect(`/todos`)
  })
});


module.exports = router;