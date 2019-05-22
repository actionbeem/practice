var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

module.exports = function(passport){
  router.get('/login', function(request, response){
    var fsmg = request.flash()
    var feedback = '';
    if(fsmg.error){
      feedback = fsmg.error[0]
    }
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      
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
      successFlash: true }
    )
  );
  
  router.get('/logout', function(request, response){
    request.session.destroy(function(err){
      response.redirect('/')
    })
  });

  return router;
}
