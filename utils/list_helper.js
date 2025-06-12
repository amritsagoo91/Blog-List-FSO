
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
  if (blogs.length === 0) return null;

  const counts = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1;
    return acc;
  }, {});

  let maxAuthor = null;
  let maxBlogs = 0;

  for (const author in counts) {
    if (counts[author] > maxBlogs) {
      maxAuthor = author;
      maxBlogs = counts[author];
    }
  }

  return { author: maxAuthor, blogs: maxBlogs };
};




module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }