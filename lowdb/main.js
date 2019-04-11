const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ topic: [], author: []}).write()

// db.get('author').push({
//   id:1,
//   name:'jackson',
//   profile:'developer',
// }).write();

// db.get('topic').push({
//   id:1,
//   title: 'lowdb',
//   description: 'lowdb .... ',
//   author: 1,
// }).write();

// db.get('topic').push({
//   id:2,
//   title: 'mysql',
//   description: 'mysql .... ',
//   author: 1,
// }).write();

// console.log(
//   db.get('topic')
//     .find({ title:'lowdb' })
//     .value()
// )

// db.get('topic')
//   .find({id:2})
//   .assign({title:'MySql & MariaDB'})
//   .write();

db.get('topic')
  .remove({id:2})
  .write();








