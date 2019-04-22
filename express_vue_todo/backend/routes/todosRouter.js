const db = require('../lib/db.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  db.query('SELECT * FROM todo', (err, todos) => {
    res.send(todos)
  })
});

router.post('/write', (req, res, next) => {
  let item = req.body;
  db.query(`INSERT INTO todo (title,completed,created) VALUES(?,false, NOW())`, [item.todoName] , (err, todos) => {
    res.send()
  })
});

router.post('/delete', (req, res, next) => {
  let target = req.body;
  db.query(`DELETE FROM todo WHERE id=?`,[target.id], (err, result) => {
    res.send()
  })
});

router.post('/delete_all', (req, res, next) => {
  db.query(`DELETE FROM todo`, (err, result) => {
    res.send()
  })
});

router.post('/complete', (req, res, next) => {
  let target = req.body;
  db.query('SELECT completed FROM todo WHERE id=?', [target.id], (err, item ) => {
    let isCompleted = item[0].completed;
    isCompleted = !isCompleted
    db.query(`UPDATE todo SET completed=? WHERE id=?;`,[ isCompleted, target.id], (err, result) => res.send())   

  })
});

router.post('/edit', (req, res, next) => {
  let item = req.body;
  db.query(`UPDATE todo SET title='${item.todoName}' WHERE id='${item.todoId}'
  `, (err, todos) => {
    res.send()
  })

});


module.exports = router;