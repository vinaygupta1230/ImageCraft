import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null
  }
}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn;
  
  if(!MONGODB_URI) throw new Error('Missing MONGODB_URL');
  mongoose.set('debug', true); // Enable Mongoose debugging
  cached.promise = 
  cached.promise || 
  mongoose.connect(MONGODB_URI, { 
    dbName: 'ImageCraft', bufferCommands: false ,
  })
  
  console.log("aaaa5");
  cached.conn = await cached.promise;
  console.log("aaaa5");
  
  return cached.conn;
}