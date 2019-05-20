var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');
var auth = require('../lib/auth.js');

var authData = {
  email: 'kjh',
  password: '2222',
}

router.get('/login', function(request, response){
  var title = 'WEB - create';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
    <form action="/auth/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="text" name="password" placeholder="password"></p>
      <p><input type="text" name="nickname" placeholder="nickname"></p>
      <p>
        <input type="submit">
      </p>
    </form>
  `, '', auth.statusUI(request, response));
  response.send(html);
});

router.post('/login_process', function(request, response){
  var post = request.body;
  var email = post.email;
  var password = post.password;
  var nickname = post.nickname;

  if(email === authData.email && password === authData.password){
    request.session.is_logined = true;
    request.session.nickname = nickname;
    request.session.save(function(){
      response.redirect('/')
    });
  } else {
    console.log('no member')
    response.redirect('/auth/login')
  }
});

router.get('/logout', function(request, response){
  request.session.destroy(function(err){
    response.redirect('/')
  })
});

module.exports = router;