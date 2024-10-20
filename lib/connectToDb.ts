import mongoose from 'mongoose'

export default async function connectToDb() {
  try {
    const uri = process.env.MONGO_URI
    if (uri) {
      await mongoose.connect(uri)
    } else {
      throw new Error('MONGO_URI is not set')
    }
  } catch (error) {
    console.error('Connection failed!', error)
    return { message: 'Failed to connect to database' }
  }
}
