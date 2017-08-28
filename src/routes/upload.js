const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploadData = multer()
const upload = require('../controller/File/Upload/upload')

router.post('/api/upload', uploadData.fields([{name: 'file', maxCount: 1}]), upload)

module.exports = router
