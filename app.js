global.__base = __dirname + '/'
const express = require('express')
const app = express()
const Router = require('./src/routes')
const bodyParser = require('body-parser')
// const upload = require('multer')()// for parsing multipart/form-data

// app.use(upload)
// for parsing application/json
app.use(bodyParser.json())
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })) 

Router.Map(app)
app.listen(9000)
