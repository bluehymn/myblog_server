const mongoDB = require('../../db')
const test = require('assert')

class Article {
  constructor (data) {
    let {title, createtime, category, content} = data
    this.data = {
      title: title,
      createtime: createtime,
      category: category,
      content: content
    }
  }
  static get () {
    return new Promise(function (resolve, reject) {
      const collection = mongoDB.DB.collection('article')
      collection.find({id: 1}).toArray(function (err, data) {
        test.equal(null, err)
        resolve(data)
      })
    })
  }

  add () {
    return new Promise((resolve, reject) => {
      const collection = mongoDB.DB.collection('article')
      collection.insertOne(this.data, function (err) {})
    })
  }
}

module.exports = Article
