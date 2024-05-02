import mongoose from 'mongoose'

export const DB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    console.log(`MongoDB Connected DB HOST: ${connectionInstance.connection.port}`)
  } catch (error) {
    console.log("Connection ERROR : ", error)
    process.exit(1)
  }
}