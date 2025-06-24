const blogRouter = require('express').Router()
const { request, response } = require('../app')
const Blog = require('../models/blog')
const { error } = require('../utils/logger')

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

blogRouter.delete('/:id', async (request, response) => {
  try {
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end()

  } catch (error) {
    return response.status(400).json({ error: error.message })

  }

})

blogRouter.put('/:id', async (request, response, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true, runValidators: true, context: 'query' }
    )
    if (updatedBlog) {
      response.json(updatedBlog)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)
  }
});

module.exports = blogRouter