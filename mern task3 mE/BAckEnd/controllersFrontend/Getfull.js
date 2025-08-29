const { getDB } = require('../config/mongodb')

const allUsers = async (req, res) => {
  try {
    const db = getDB()
    const result = await db.collection('office-1').find().toArray();
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = allUsers