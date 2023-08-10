const articleService = require('./articles.service');

async function createArticle(req, res) {
  const articleData = req.body;
  articleData.user = req.user._id; 
  try {
    const createdArticle = await articleService.createArticle(articleData);
    res.status(201).json(createdArticle);
  } catch (error) {
    res.status(500).json({ error: 'Error creating article' });
  }
}

async function updateArticle(req, res) {
  const { articleId } = req.params;
  const articleData = req.body;
  try {
    const updatedArticle = await articleService.updateArticle(articleId, articleData);
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Error updating article' });
  }
}

async function deleteArticle(req, res) {
  const { articleId } = req.params;
  try {
    await articleService.deleteArticle(articleId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting article' });
  }
}

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};

const articleService = require('./articles.service');

async function updateArticle(req, res) {
  const { articleId } = req.params;
  const articleData = req.body;

  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Only admins can update articles' });
  }

  try {
    const updatedArticle = await articleService.updateArticle(articleId, articleData);
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Error updating article' });
  }
}

async function deleteArticle(req, res) {
  const { articleId } = req.params;

  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Only admins can delete articles' });
  }

  try {
    await articleService.deleteArticle(articleId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting article' });
  }
}

module.exports = {
  updateArticle,
  deleteArticle
};
