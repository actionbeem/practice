const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring')

const app = http.createServer((request, response) => {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir(`data/`, (err, filelist) => {
        const title = 'Welcome';
        const description = 'hello world'
        const control = `<a href="/create">create</a>`

        response.writeHead(200);
        response.end(template.html(title, description, filelist, control));
      })
    } else {
      fs.readdir(`data/`, (err, filelist) => { 
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          const title = queryData.id;
          const control = `
            <a href="/create">create</a>
            <a href="/update?id=${title}">update</a>
            <form action="/delete" method="post">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
            </form>
          `
          response.writeHead(200);
          response.end(template.html(title, description, filelist, control));
        })
      })
    }
  } else if (pathname === '/create'){
    fs.readdir(`data/`, (err, filelist) => {
      const title = 'Create'
      const form = `
        <form action="/create_process" method="post">
          <input type="text" name="title">
          <textarea name="description"></textarea>
          <input type="submit">
        </form>
      `
      const control = `<a href="/create">create</a>`

      response.writeHead(200)
      response.end(template.html(title, form, filelist, control))
    })

  } else if (pathname === '/create_process'){
    let body = '';
    request.on('data', data => {
      body += data;
    })
    request.on('end', () => {
      const post = qs.parse(body);
      const title = post.title;
      const description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', err => {
        response.writeHead(302, { Location: `/`});
        response.end();
      })
    })
  } else if (pathname === '/update'){
    fs.readdir(`data/`, (err, filelist) => {
      const title = queryData.id;
      fs.readFile(`data/${title}`, 'utf8', (err, description) => {
        const form = `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <input type="text" name="title" value="${title}">
            <textarea name="description">${description}</textarea>
            <input type="submit">
          </form>
        `
        const control = `<a href="/create">create</a><a href="/update?id=${title}">update</a>`

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
      const post = qs.parse(body);
      const id = post.id; 
      const title = post.title;
      const description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, err => {
        fs.writeFile(`data/${title}`, description, 'utf8', err => {
          response.writeHead(302, { Location: `/?id=${title}`})
          response.end()
        })
      })
    })
  } else if (pathname === '/delete'){
    let body = '';
    request.on(`data`, data => {
      body += data;
    })
    request.on(`end`, () => {
      const post = qs.parse(body)
      const id = post.id;
      fs.unlink(`data/${id}`, err => {
        response.writeHead(302, {Location : `/`});
        response.end();
      })     
    })


  } else {
    response.writeHead(404);
    response.end('not found');
  }

});

const template = {
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