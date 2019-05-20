module.exports = {
  statusUI: function(request, response){
    var authStatusUI = '<a href="/auth/login">login</a>'
    if(request.session.is_logined){
      var nick = request.session.nickname;
      authStatusUI = `${nick} | <a href="/auth/logout">logout</a>`
    }
    return authStatusUI;
  }
}
