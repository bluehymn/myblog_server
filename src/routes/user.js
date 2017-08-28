const express = require('express')
const router = express.Router()
const user = require('../controller/User/user')
router.post('/api/user', user.add)
router.post('/api/user/login', user.login)
router.get('/api/user/:name', user.getInfo)
module.exports = router
