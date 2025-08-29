const { MongoClient } = require('mongodb')
// import { MongoClient } from 'mongodb'
const dotenv = require('dotenv')
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI)

let DB;

async function conectTOdb() {
  try {
    await client.connect()
    DB = client.db(process.env.DBname)
    console.log('connected db now of' );

  } catch (error) {
    console.error('DB connection', error);
    process.exit(1)
  }
}

function getDB() {
  if (!DB) throw new Error("DB not connected first conectTOdb")
  return DB
}

module.exports = { conectTOdb, getDB }