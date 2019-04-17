module.exports = {
  html(title, list, description, control){
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>express-mysql</title>
      </head>
      <body>
        <h1><a href="/">Holla express</a></h1>
        <h2>${title}</h2>
        ${list}
        <div>
          ${control}
        </div>
        ${description}
      </body>
      </html>
    `
  },
  list(topics){
    let list = '<ul>';
    topics.forEach(topic => list += `<li><a href="/topic/${topic.id}">${topic.title}</a></li>`);
    list += '</ul>';

    return list;
  }
}