let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring')

let app = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir(`data/`, (err, filelist) => {
        let title = 'Welcome';
        let description = 'hello world'
        let control = `<a href="/create">create</a>`

        response.writeHead(200);
        response.end(template.html(title, description, filelist, control));
      })
    } else {
      fs.readdir(`data/`, (err, filelist) => { 
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          let title = queryData.id;
          let control = `<a href="/create">create</a><a href="/update?id=${title}">update</a>`
          response.writeHead(200);
          response.end(template.html(title, description, filelist, control));
        })
      })
    }
  } else if (pathname === '/create'){
    fs.readdir(`data/`, (err, filelist) => {
      let title = 'Create'
      let form = `
        <form action="/create_process" method="post">
          <input type="text" name="title">
          <textarea name="description"></textarea>
          <input type="submit">
        </form>
      `
      let control = `<a href="/create">create</a>`

      response.writeHead(200)
      response.end(template.html(title, form, filelist, control))
    })

  } else if (pathname === '/create_process'){
    let body = '';
    request.on('data', data => {
      body += data;
    })
    request.on('end', () => {
      let post = qs.parse(body);
      let title = post.title;
      let description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', err => {
        response.writeHead(302, { Location: `/`});
        response.end();
      })
    })
  } else if (pathname === '/update'){
    fs.readdir(`data/`, (err, filelist) => {
      let title = queryData.id;
      fs.readFile(`data/${title}`, 'utf8', (err, description) => {
        let form = `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <input type="text" name="title" value="${title}">
            <textarea name="description">${description}</textarea>
            <input type="submit">
          </form>
        `
        let control = `<a href="/create">create</a><a href="/update?id=${title}">update</a>`

        response.writeHead(200)
        response.end(template.html(title, form, filelist, control))
      })

    })    
  } else if (pathname === '/update_process'){
    let body = '';
    request.on('data', data => {
      body += data;
    })
    request.on('end', () => {
      let post = qs.parse(body);
      let id = post.id; 
      let title = post.title;
      let description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, err => {
        fs.writeFile(`data/${title}`, description, 'utf8', err => {
          response.writeHead(302, { Location: `/?id=${title}`})
          response.end()
        })
      })
    })
  } else {
    response.writeHead(404);
    response.end('not found');
  }

});

let template = {
  list(filelist, control){
    let body = '<ul>'
    filelist.forEach(file => {
      body += `<li><a href="/?id=${file}">${file}</a></li>`
    })
    body += '</ul>'
    body += control;
    return body;
  },
  html(title, description, filelist, control){
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Node_repeat</title>
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${this.list(filelist, control)}
        <div>
          <h2>${title}</h2>
          ${description}
        </div>
      </body>
      </html>
    `
  },
}

app.listen(3000)