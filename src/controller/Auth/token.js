const Token = require(__base + 'src/model/Token/token')

exports.create = function (data) {
  let token = new Token(data)
  return token.create()
}

exports.check = function (token) {

}