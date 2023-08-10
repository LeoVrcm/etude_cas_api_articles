const express = require('express');
const router = express.Router();
const articlesController = require('./articles.controller');
const authMiddleware = require('../auth/auth.middleware'); 

router.post('/', authMiddleware.authenticate, articlesController.createArticle);
router.put('/:articleId', authMiddleware.authenticate, articlesController.updateArticle);
router.delete('/:articleId', authMiddleware.authenticate, articlesController.deleteArticle);

module.exports = router;
