import express from 'express'
import { connectDB } from '*/config/mongodb.js'
import { env } from '*/config/environtment'
import { apiV1 } from '*/routes/v1'
import cors from 'cors'
import { corsOptions } from './config/cors'


connectDB()
  .then(() => console.log('Connected successfully to database server!'))
  .then(() => bootServer())
  .catch(error => {
    console.log(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  app.use(cors(corsOptions))

  // Enable req.body data
  app.use(express.json())

  // Use APIs v1
  app.use('/v1', apiV1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })
}
