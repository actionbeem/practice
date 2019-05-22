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
    done(null, user.email);
  });

  passport.deserializeUser(function(id, done) {
    done(null, authData);
  });

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'pwd'
    },
    function(username, password, done) {
      if(username === authData.email) {
        if(password === authData.password) {
          return done(null, authData, {
            message: 'Welcome'
          });
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else {
        return done(null, false, { 
          message: 'Incorrect username.'
        });
      }
      
      /*
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
      */
    }
  ));
  return passport;
}

