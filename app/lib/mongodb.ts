import mongoose from 'mongoose'

interface Cached {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

let cached: Cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI || (process.env.NODE_ENV === 'development' ? 'mongodb://localhost:27017/twitter-clone' : '')

  console.log('MONGODB_URI (in connectDB of app/lib/mongodb.ts):', MONGODB_URI)

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable. For Vercel, set it in Project Settings > Environment Variables.'
    )
  }

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectDB 