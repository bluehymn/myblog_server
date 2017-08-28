const Article = require('../../model/Article/article')

exports.get = function (req, res, next) {
  Article.get().then((data) => {
    res.send(data)
  })
}

exports.add = function (req, res, next) {
  let article = new Article({
    title: 'title',
    createtime: new Date(),
    category: 0,
    content: 'content'
  })
  article.add()
}