describe('Articles API', () => {
  it('should create a new article', async () => {
    const response = await request(app)
      .post('/api/articles')
      .send({ title: 'Test Article', content: 'This is a test article.' })
      .set('Authorization', 'Bearer token');

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  it('should update an existing article', async () => {
    const articleId = ARTICLE_ID;
    const response = await request(app)
      .put(`/api/articles/${articleId}`)
      .send({ title: 'Updated Test Article' })
      .set('Authorization', 'Bearer token'); 

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Updated Test Article');
  });

  it('should delete an article', async () => {
    const articleId = ARTICLE_ID;
    const response = await request(app)
      .delete(`/api/articles/${articleId}`)
      .set('Authorization', 'Bearer token'); 

    expect(response.statusCode).toBe(204);
  });
});
