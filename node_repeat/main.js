let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir(`data/`, (err, filelist) => {
        let title = 'Welcome';
        let description = 'hello world'

        response.writeHead(200);
        response.end(template.html(title, description, filelist));
      })
    } else {
      fs.readdir(`data/`, (err, filelist) => { 
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          let title = queryData.id;
          response.writeHead(200);
          response.end(template.html(title, description, filelist));
        })
      })
    }
  } else {
    response.writeHead(404);
    response.end('not found');
  }

});

let template = {
  list(filelist){
    let body = '<ul>'
    filelist.forEach(file => {
      body += `<li><a href="/?id=${file}">${file}</a></li>`
    })
    body += '</ul>'
    return body;
  },
  html(title, description, filelist){
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Node_repeat</title>
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${this.list(filelist)}
        <div>
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
      </body>
      </html>
    `
  },
}

app.listen(3000)