const { getDB } = require('../config/mongodb')

const creatingPost = async (req, res) => {
  const db = getDB()
  console.log('REQ C',req);
  
  const result = await db.collection('office-1').insertOne(req.body)
  res.status(201).json(result)
  // console.log(res.json());
  
}

module.exports = creatingPost;