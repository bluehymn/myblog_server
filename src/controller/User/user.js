const auth = require(__base + 'src/controller/Auth/auth')
const token = require(__base + 'src/controller/Auth/token')
const User = require(__base + 'src/model/User/user')

exports.login = function (req, res, next) {
  let data = req.body
  let name = data.name
  // decrypt the pwd
  let pwd = auth.decrypt(Buffer.from(data.pwd, 'base64'))
  // create the pwd`s hash
  auth.createHash(pwd.toString('utf8').split(' ')[0])
    .then(pwd => {
      // query the user
      User.check({
        name: name,
        pwd: pwd
      })
        .then(uid => {
          // create token
          if (uid) {
            token.create({
              name: name,
              uid: uid
            })
              .then(token => {
                if (data) {
                  // reponse token
                  res.status(201).send({
                    status: 'success',
                    token: token
                  })
                }
              })   
          } else {
            res.status(403).send({
              status: 'failed',
              msg: '用户名或密码错误'
            })
          }
        })
    })
}

exports.add = function (req, res, next) {
}

exports.getInfo = function (req, res, next) {
}