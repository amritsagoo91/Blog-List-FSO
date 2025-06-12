const { test, describe } = require('node:test')
const assert = require('node:assert')
const mostLikes = require('../utils/list_helper').mostLikes


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
  },
  // Added duplicates below
  {
    _id: '5a422aa71b54a676234d17fd',
    title: 'Clean Architecture: A Craftsman\'s Guide',
    author: 'Robert C. Martin',
    url: 'https://www.example.com/clean-architecture',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17fe',
    title: 'Agile Principles and Patterns',
    author: 'Robert C. Martin',
    url: 'https://www.example.com/agile-patterns',
    likes: 9,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17ff',
    title: 'Structured Programming',
    author: 'Edsger W. Dijkstra',
    url: 'https://www.example.com/structured-programming',
    likes: 6,
    __v: 0
  }
];


describe('most likes with author', () => {

  test('most likes', () => {

    const result = mostLikes(listWithOneBlog)
    const expected = { author: 'Edsger W. Dijkstra', likes: 5 }
    assert.deepStrictEqual(result, expected)

  })

  test('list with five blogs', () => {
    const result = mostLikes(listWithFiveBlogs)
    const expected = { author: 'Andrew Hunt, David Thomas', likes: 15 }
    assert.deepStrictEqual(result, expected)
  })


})

