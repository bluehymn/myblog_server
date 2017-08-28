const express = require('express')
const router = express.Router()
// const auth = require('../controller/Auth/auth')

router.all('/api/*', function (req, res, next) {
  let authPaths = ['/api/user/getinfo']
  let path = req.path
  console.log(req.get('User-Agent'))
  if (~authPaths.indexOf(path)) {
    if (!req.get('Authorization')) {
      res.status(403).send({
        status: 'failed',
        msg: '无效的token'
      })
    }
  } else {
    // todo: Authorization
    next()
  }
})

module.exports = router
