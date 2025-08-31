import { mongoose } from "mongoose";
// import { MongoClient } from 'mongodb'
// const dotenv = require('dotenv')
import 'dotenv/config';
// import dotenv from 'dotenv'
// dotenv.config();

// const client = new MongoClient(process.env.MONGO_URI)



export const conectTOdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLS )
    console.log('connection established');

  } catch (error) {
    console.error('DB connection', error.message);
    process.exit(1)
  }
}

function getDB() {
  return mongoose.connection.db
}
export default getDB

console.log('working');
// module.exports = { conectTOdb, getDB }