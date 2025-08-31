// import getDB from'../config/mongodb.js'
import { User3 } from "../user model/model.js";

export const allUsers = async (req, res) => {
  try {
    const result = await User3.find()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
}

export const getoneU = async (req, res) => {
  try {
     const user = await User3.findOne({ id: req.params.id });
    res.status(200).json(user)
  } catch (error) {
    console.error(error.message);

  }
}
