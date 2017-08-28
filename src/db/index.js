const MongoClient = require('mongodb').MongoClient
const config = require('../config/dbconfig').DBConfig
const url = `mongodb://${config.user}:${encodeURIComponent(config.pwd)}@${config.host}:${config.port}/${config.db}`

console.log(url)

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  console.log('Connected correctly to server')
  exports.DB = db
})
