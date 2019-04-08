var db = require('./db.js')
var template = require('./template.js');

exports.home = function(request, response){
  db.query(`SELECT * FROM topic`, (error, topics) => {
    db.query(`SELECT * FROM author`, (error2, authors) => {
      var title = 'author';
      var list = template.list(topics);
      var html = template.HTML(title, list,
      `
        ${template.authorTable(authors)}
        <style>
        table { border-collapse: collapse; }
        td { border:1px solid #000; }  
        </style>
      `,
      `<a href="/create">create</a>` )
      response.writeHead(200);
      response.end(html);
    });
  });
}