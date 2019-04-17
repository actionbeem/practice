const db = require('../lib/db.js');
const express = require('express');
const router = express.Router();
const template = require('../lib/template.js')

/* GET home page. */
router.get('/', function(req, res) {
  db.query('SELECT * FROM topic', (error, topics)=>{
    let title = 'welcome'
    let list = template.list(topics)
    let control = `<a href="/topic/create">create</a>`
    let html = template.html(title, list, '', control);
    res.send(html);
  })
});

module.exports = router;
