
const dummy = (array) => {
  if (array.length >= 0) {
    return 1
  }
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }

  if (blogs.length === 1) {
    return blogs[0].likes
  }

  return blogs.reduce((sum, blog) => sum + blog.likes, 0)

}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }
  if (blogs.length === 1) {
    return blogs[0].likes
  }
  return blogs.reduce((favorite, current) => (favorite.likes > current.likes) ? favorite : current)
}

module.exports = { dummy, totalLikes, favoriteBlog }