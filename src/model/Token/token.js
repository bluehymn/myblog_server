const mongoDB = require('../../db')
const test = require('assert')
const jwt = require('jsonwebtoken')

class Token {
  constructor (data) {
    this.data = data
  }

  create () {
    let token = jwt.sign(this.data, 'baobao520')
    const collection = mongoDB.DB.collection('token')
    return new Promise((resolve, reject) => {
      // add a token to collection of token
      collection.insertOne({
        uid: this.data.uid,
        token: token
      }, (err, result) => {
        test.equal(null, err)
        resolve(token)
      })
    })
  }
}

module.exports = Token
