const Article = require('./article.model');

async function createArticle(articleData) {
  const article = new Article(articleData);
  return article.save();
}

async function updateArticle(articleId, articleData) {
  return Article.findByIdAndUpdate(articleId, articleData, { new: true });
}

async function deleteArticle(articleId) {
  return Article.findByIdAndDelete(articleId);
}

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};
