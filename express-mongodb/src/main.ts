import dotnev from 'dotenv'
import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

import { createLogger } from './logger.js'

if (process.env.NODE_ENV !== 'production') {
  dotnev.config()
}

// constants
const PORT = process.env.PORT ?? 3000

const logger = createLogger()
const app = express()
const mongo = new MongoClient(process.env.MONGO_CONNECTION_STRING ?? 'mongodb://localhost:27017')
const db = mongo.db(process.env.MONGO_DATABASE)

app.use(cors()) // enable cors
app.use(express.json()) // use json body parser middleware

app.listen(PORT, () => {
  logger.info(`Starting server on port ${PORT}...`)
})
