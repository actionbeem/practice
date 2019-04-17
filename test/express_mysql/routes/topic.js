const db = require('../lib/db.js');
const express = require('express');
const router = express.Router();
const template = require('../lib/template.js')

/* GET users listing. */
router.get('/create', (req, res) => {
  db.query('SELECT * FROM topic', (err, topics)=>{
    let title = 'create';
    let description = `
      <form action="/topic/create_process" method="post">
        <input type="text" name="title">
        <textarea name="description"></textarea>
        <input type="submit"> 
      </form>
    `
    let control = `<a href="/topic/create">create</a>`
    let list = template.list(topics);
    let html = template.html(title, list, description, control)
    res.send(html);
  })
});

router.post('/create_process', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  db.query(`INSERT INTO topic (title,description,created,author_id) VALUES(?,?, NOW(), ?)`, [title, description, 2], (err, result) => {
    res.redirect('/');
  })
});

router.get('/update/:id', (req, res) => {
  let topicId = req.params.id;
  db.query('SELECT * FROM topic', (err, topics)=>{
    db.query(`SELECT * FROM topic WHERE id=${topicId}`, (err, topic)=>{
      let title = 'update';
      let description = `
      <form action="/topic/update_process" method="post">
        <input type="hidden" name="id" value="${topicId}">
        <input type="text" name="title" value="${topic[0].title}">
        <textarea name="description">${topic[0].description}</textarea>
        <input type="submit"> 
      </form>
        `
      let control = `<a href="/topic/create">create</a><a href="/topic/update/${topicId}">update</a>`
      let list = template.list(topics);
      let html = template.html(title, list, description, control)
      res.send(html);
    });
  });
});

router.post('/update_process', (req, res) => {
  let post = req.body;
  console.log(post.id, post.title, post.description)
  db.query(`UPDATE topic SET title="${post.title}",description="${post.description}" WHERE id=${post.id}`, (err, result) => {
    res.redirect(`/topic/${post.id}`);
  })
});

router.post('/delete_process', (req, res) => {
  let post = req.body;
  db.query(`DELETE FROM topic WHERE id=${post.id}`, (err, result) => {
    res.redirect(`/`);
  })
});

router.get('/:id', (req, res) => {
  let topicId = req.params.id;
  db.query('SELECT * FROM topic', (err, topics)=>{
    db.query(`SELECT * FROM topic where id=${topicId}`, (err, topic) => {
      let title = topic[0].title;
      let description = topic[0].description;
      let control = `
        <a href="/topic/create">create</a>
        <a href="/topic/update/${topicId}">update</a>
        <form action="/topic/delete_process" method="post">
          <input type="hidden" name="id" value="${topicId}">
          <input type="submit" value="delete">
        </form>
      `;
      let list = template.list(topics);
      let html = template.html(title, list, description, control)
      res.send(html);
    });
  });
});

module.exports = router;
