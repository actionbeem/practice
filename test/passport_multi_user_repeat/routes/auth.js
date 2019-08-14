var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');
const shortid = require('shortid');
var db = require('../lib/db');
const bcrypt = require('bcrypt');

module.exports = function(passport){
  router.get('/login', function(request, response){
    console.log('xq')
    var fmsg = request.flash();
    var feedback = '';
    if(fmsg.error){
      feedback = fmsg.error[0]
    }
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red">${feedback}</div>
      <form action="/auth/login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="text" name="pwd" placeholder="password"></p>
        <p>
          <input type="submit" value="login">
        </p>
      </form>
    `, '');
    response.send(html);
  });
  
  router.post('/login_process',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth/login',
      failureFlash: true,
      successFlash: true,
    })
  );

  router.get('/register', function(request, response){
    var fmsg = request.flash();
    var feedback = '';
    if(fmsg.error){
      feedback = fmsg.error[0]
    }
    var title = 'WEB - register';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red">${feedback}</div>
      <form action="/auth/register_process" method="post">
        <p><input type="text" name="email" placeholder="email" value="ratm@gmail.com"></p>
        <p><input type="text" name="pwd" placeholder="password" value="1"></p>
        <p><input type="text" name="pwd2" placeholder="password" value="1"></p>
        <p><input type="text" name="nickname" placeholder="nickname" value="jack"></p>
        <p>
          <input type="submit" value="register">
        </p>
      </form>
    `, '');
    response.send(html);
  });

  router.post('/register_process', function(request, response){
    var post = request.body;
    var email = post.email;
    var password = post.pwd;
    var nickname = post.nickname;
    if(post.pwd !== post.pwd2){
      console.log('fail register')
      return response.redirect('/auth/register');
    }
    bcrypt.hash(password, 10, function(err, hash) {
      var user = {
        id: shortid.generate(),
        email: email,
        password: hash,
        nickname: nickname
      }
      db.get('users').push(user).write();
      request.login(user, function(err) {
        return response.redirect('/');
      });     
    });

  });
  
  router.get('/logout', function(request, response){
    request.logout();
    request.session.save(function(){
      response.redirect('/')
    })
  });
  return router;
}


