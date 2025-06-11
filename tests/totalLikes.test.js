const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('total likes', () => {

  const listWithZeroBlogs = []
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

  test('of empty list is zero', () => {
    const result = listHelper.totalLikes(listWithZeroBlogs)
    assert.strictEqual(result, 0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('of a bigger list is calculated right ', () => {
    const result = listHelper.totalLikes(listWithFiveBlogs)
    assert.strictEqual(result, 47)

  })
})