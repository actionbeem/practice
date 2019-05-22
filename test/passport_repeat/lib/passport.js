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
    console.log('serial :', user)
    done(null, user.email);
  });

  passport.deserializeUser(function(id, done) {
    done(null, authData)
  });

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'pwd'
    },
    function(username, password, done) {
      if(username === authData.email){
        console.log(1)
        if(password === authData.password){
          console.log(2)
          return done(null, authData, {
            message: 'welcome'
          });
        } else {
          console.log(3)
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else {
        console.log(4)
        return done(null, false, { message: 'Incorrect username.' });
      }
    }
  ));

  return passport;
}

