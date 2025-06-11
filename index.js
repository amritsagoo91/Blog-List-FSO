const app = require('./app')
const logger = require('./utils/logger')
const { PORT } = require('./utils/config')

app.listen(process.env.PORT || PORT, () => {
  logger.info(`Server running on port ${process.env.PORT || PORT}`)
})