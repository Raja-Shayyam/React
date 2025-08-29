const { getDB } = require('../config/mongodb')
const { ObjectId } = require('mongodb')

const updating = async (req, res) => {
  const db = getDB()
  const result = await db.collection('office-1').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body })
  if (result.matchedCount === 0) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User updated", result });
}

module.exports = updating