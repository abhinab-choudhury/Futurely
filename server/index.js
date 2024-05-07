import express from 'express'
import cors from 'cors'
import { DB } from './DB.js'
import { createUser } from './routes/createUser.js'
const app = express()

DB().then(() => {
  // let wishList = ['http://localhost:5173/', 'https://futurely.vercel.app/']
  app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: http://localhost:${process.env.PORT}`)
  })
  app.use(cors())
  app.use(express.json())
  app.use("/", (req, res) => {
    res.json({
      message: "Welcome to Futurely Backend."
    })
  })
  app.use("/api/create_user", createUser)
})
