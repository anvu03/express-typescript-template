import express from 'express'
import cors from 'cors'

import { createLogger } from './logger.js'

// constants
const PORT = process.env.PORT ?? 3000

const logger = createLogger()
const app = express()

app.use(cors()) // enable cors
app.use(express.json()) // use json body parser middleware

app.listen(PORT, () => {
  logger.info(`Starting server on port ${PORT}...`)
})
