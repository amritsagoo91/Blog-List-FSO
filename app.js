require('express-async-error')
const express = require('express')
const mongoose = require('mongoose')
const blogRouter = require('./controller/blog')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const { MONGODB_URI } = require('./utils/config')


const app = express()


mongoose.connect(MONGODB_URI).then(() => {
  logger.info('Connected Successfully')
}).catch((error) => logger.error(error.message))

app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogRouter)
app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)


module.exports = app