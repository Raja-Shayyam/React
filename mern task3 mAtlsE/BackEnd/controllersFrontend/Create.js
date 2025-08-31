import { User3 } from "../user model/model.js";

export const creatingPost = async (req, res) => {
  try {
    const user3 = new User3(req.body)
    await user3.save()
    res.status(201).json(user3)
  } catch (error) {
    console.log(error.message);
    
  }
}
