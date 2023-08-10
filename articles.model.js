const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft' 
  },

});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
