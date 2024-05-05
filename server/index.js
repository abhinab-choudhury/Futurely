import express, { urlencoded } from 'express'
import cors from 'cors'
import { DB } from './DB.js'
import { createUser } from './routes/createUser.js'
const app = express()

DB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: http://localhost:${process.env.PORT}`)
  })
  app.use(express.json())
  app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
  }))
  app.use("/api/create_user", createUser)
})
