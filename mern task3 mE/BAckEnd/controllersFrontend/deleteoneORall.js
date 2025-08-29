const { getDB } = require('../config/mongodb')
const { ObjectId } = require('mongodb')

const deleting = async (req, res) => {
  const db = getDB()
  // console.log('REQQ ', req);
  const result = await db.collection('office-1').deleteOne({ _id: new ObjectId (req.params.id) })
  console.log('userdele count ', result.deletedCount);
  res.json({ message: "User deleted" });
  // res.json()
}

module.exports = deleting