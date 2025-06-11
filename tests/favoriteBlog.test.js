const { test, describe } = require('node:test')
const assert = require('node:assert')
const favoriteBlog = require('../utils/list_helper').favoriteBlog

describe('blogs with most likes', () => {

  const listWithZeroBlog = []

  const listWithFiveBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      url: 'https://www.example.com/clean-code',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17fa',
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
      url: 'https://www.example.com/design-patterns',
      likes: 8,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17fb',
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt, David Thomas',
      url: 'https://www.example.com/pragmatic-programmer',
      likes: 15,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17fc',
      title: 'Refactoring: Improving the Design of Existing Code',
      author: 'Martin Fowler',
      url: 'https://www.example.com/refactoring',
      likes: 7,
      __v: 0
    }
  ]


  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]


  test('blog with most likes', () => {


    const result = favoriteBlog(listWithFiveBlogs)
    assert.deepStrictEqual(result, listWithFiveBlogs[3])
  })
  test('list with one blog', () => {


    const result = favoriteBlog(listWithOneBlog)
    assert.deepStrictEqual(result, listWithOneBlog[0].likes)
  })

  test('list with zero blog', () => {


    const result = favoriteBlog(listWithZeroBlog)
    assert.strictEqual(result, 0)
  })






})