const fs = require('fs')

module.exports = function (req, res, next) {
  let file = req.files['file'][0]
  let ext = file.mimetype.split('/')[1]
  let filename = new Date().getTime()
  fs.writeFile(`upload/${filename}.${ext}`, file.buffer)
  res.status(201).send({
    status: 'success'
  })
}