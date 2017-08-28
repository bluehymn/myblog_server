const crypto = require('crypto')
const fs = require('fs')
const privKey = fs.readFileSync('./src/controller/Auth/rsa_1024_priv.pem').toString('utf8')
const jwt = require('jsonwebtoken')

exports.decrypt = function (buf) {
  return crypto.privateDecrypt({key: privKey, padding: crypto.constants.RSA_PKCS1_PADDING}, buf)
}

exports.createHash = function (string) {
  const hash = crypto.createHash('sha256')
  return new Promise((resolve, reject) => {
    hash.on('readable', () => {
      const data = hash.read()
      if (data) {
        resolve(data.toString('hex'))
      }
    })
    
    hash.write(string)
    hash.end()
  })
}
