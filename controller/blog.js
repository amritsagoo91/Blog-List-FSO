const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {

  const blogs = await Blog.find({})
  return response.json(blogs)

})

blogRouter.post('/', async (request, response) => {
  try {
    const blog = new Blog(request.body)
    const saved = await blog.save()
    response.status(201).json(saved)

  } catch (error) {
    if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  }

  // blog.save().then((result) => {
  //   response.status(201).json(result)
  // })


})

module.exports = blogRouter