const article = require('./article')
const user = require('./user')
const interceptor = require('./interceptor')
const upload = require('./upload')

exports.Map = function (app) {
  app.use(interceptor)
  app.use(article)
  app.use(user)
  app.use(upload)
}
