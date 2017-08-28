const mongoDB = require('../../db')
const test = require('assert')
const ObjectID = require('mongodb').ObjectID

class User {
  constructor (data) {
    let {name, pwd, nickname} = data
    this.data = {
      name: name,
      pwd: pwd,
      nickname: nickname || ''
    }
  }
  add () {
    return new Promise((resolve, reject) => {
      const collection = mongoDB.DB.collection('user')
      collection.find({name: this.data.name}).toArray((err, data) => {
        test.equal(null, err)
        if (data.length === 0) {
          collection.insertOne(this.data, function (err) {
            test.equal(null, err)
            resolve(true)
          })
        } else {
          resolve(false)
        }
      })
    })
  }

  static getInfo (uid) {
    return new Promise((resolve, reject) => {
      const collection = mongoDB.DB.collection('user')
      collection.find({_id: ObjectID(uid)}).toArray(function (err, data) {
        test.equal(null, err)
        if (data.length === 1) {
          resolve(data[0])
        } else {
          resolve(false)
        }
      })
    })
  }

  static check (data) {
    return new Promise((resolve, reject) => {
      const collection = mongoDB.DB.collection('user')
      collection.find(data).toArray(function (err, data) {
        test.equal(null, err)
        console.log(data)
        // user is existing
        if (!!data.length) {
          resolve(data[0]._id.toHexString())
        } else {
          resolve(false)
        }
      })
    })
  }
}

module.exports = User
