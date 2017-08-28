// route: article
const express = require('express')
const router = express.Router()
const article = require('../controller/Article/article')

router.get('/api/article', article.get)
router.post('/api/article', article.add)

module.exports = router
