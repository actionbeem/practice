let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){
      let title = 'Welcome';
      let description = 'hello world'

      response.writeHead(200);
      response.end(html(title, description));
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
        let title = queryData.id;
        response.writeHead(200);
        response.end(html(title, description));
      })
    }
  } else {
    response.writeHead(404);
    response.end('not found');
  }

});

let html = function(title, description){
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Node_repeat</title>
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <div>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    </body>
    </html>
  `
}

app.listen(3000)