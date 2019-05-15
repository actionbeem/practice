var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
  var cookies = {};
  if(request.headers.cookie){
    cookies = cookie.parse(request.headers.cookie)
  }
  response.writeHead(200, {
    'Set-Cookie' : [
      'yummy=choco',
      'tast=strawberry',
      `Permanent=cookies; Max-Age=${60*60*24*30}`,
      'Secure=Secure; Secure',
      'HttpOnly=HttpOnly; HttpOnly'
    ]
  });

  response.end('Cookie')
}).listen(3000)