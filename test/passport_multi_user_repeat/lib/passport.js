var db = require('./db')
const bcrypt = require('bcrypt');

module.exports = function(app){

  var authData = {
    email: 'kjh',
    password: '1111',
    nickname: 'hola'
  }

  var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    console.log('serial : ', user)
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    var user = db.get('users').find({id:id}).value();
    done(null, user);
  });

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'pwd'
    },
    function(email, password, done) {
      var user = db.get('users').find({email: email}).value();
      if(user) {
        bcrypt.compare(password, user.password, function(err, res) {
          if(res){
            return done(null, user, {
              message: 'Welcome'
            });
          } else {
            return done(null, false, {
              message: 'Password is not correct'
            });
          }
        });
      } else {
        return done(null, false, { 
          message: 'Incorrect username.'
        });
      }
    }
  ));
  return passport;
}

