const assert = require('node:assert')
const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    { title: 'First blog', author: 'Author A', url: 'http://localhost:3001', likes: 1 },
    { title: 'Second blog', author: 'Author B', url: 'http://localhost:3002' }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
})

test.only('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test.only('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, initialBlogs.length)
})

test.only('a valid blog can be added', async () => {
    const newBlog = {
        title: 'test blog',
        author: 'test author',
        url: 'http://localhost:3003',
        likes: 0
    }

    await api.post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await Blog.find({})
    assert.strictEqual(blogsAtEnd.length, initialBlogs.length + 1)
})

test.only('if the likes property missing', async () => {
    blogWithoutLikes = {
        title: 'testBlog',
        author: 'testAuthor',
        url: 'http://localhost:3003'
    }

    const response = await api.post('/api/blogs')
        .send(blogWithoutLikes)
        .expect(201)
        .expect('Content-Type', /application\/json/)

     assert.strictEqual(response.body.likes, 0)

})

test.only('unique identifier property of blog posts is named id', async () => {
    const response = await api.get('/api/blogs')

    const blog = response.body[0]
    assert.ok(blog.id)
    assert.strictEqual(blog._id, undefined)
})

after(async () => {
    await mongoose.connection.close()
})
