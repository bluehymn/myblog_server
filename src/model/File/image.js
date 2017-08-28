const mongoDB = require('../../db')
const test = require('assert')

class Image {
  constructor (name, uid) {
    this.name = name
    this.owner = uid
  }
  save () {
    return new Promise((resolve, reject) => {
      const collection = mongoDB.DB.collection('images')
      collection.insertOne(this.data, function (err) {})
    })
  }
}