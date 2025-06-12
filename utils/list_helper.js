
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

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null


  const blogCounts = {}

  blogs.forEach(blog => {
    blogCounts[blog.author] = (blogCounts[blog.author] || 0) + 1
  });

  let maxAuthor = null
  let maxBlogs = 0

  for (const author in blogCounts) {
    if (blogCounts[author] > maxBlogs) {
      maxAuthor = author;
      maxBlogs = blogCounts[author]
    }
  }

  return { author: maxAuthor, blogs: maxBlogs }
}


const mostLikes = (blogs) => {
  if (blogs.length === 0) return null;

  const topAuthor = blogs.reduce((acc, curr) =>
    curr.likes > acc.likes
      ? { author: curr.author, likes: curr.likes }
      : acc
    , { author: '', likes: 0 });

  return topAuthor;
};


module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }