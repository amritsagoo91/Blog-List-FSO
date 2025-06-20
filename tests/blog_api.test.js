const assert = require('node:assert')
const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})

    const blog1 = new Blog({ title: 'First blog', author: 'Author A', url: 'http:localhost:3001', likes: 1 })
    const blog2 = new Blog({ title: 'Second blog', author: 'Author B', url: 'http://localhost:3002', likes: 2 })

    await blog1.save()
    await blog2.save()
})

test.only('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

})

test.only('all blogs are returned', async () => {

    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, 2)
})

after(async () => {
    await mongoose.connection.close()
})