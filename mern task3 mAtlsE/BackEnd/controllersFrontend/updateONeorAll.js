import { User3 } from "../user model/model.js";
import {ObjectId} from 'mongodb'

export const updating = async (req, res) => {
  const result = await User3.findOneAndUpdate(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body },
    { new: true }
  )
  if (result.matchedCount === 0) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User updated", result });
}

