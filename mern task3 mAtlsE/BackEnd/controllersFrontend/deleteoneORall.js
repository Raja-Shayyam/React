import { User3 } from '../user model/model.js'


export const deleting = async (req, res) => {
  const result= await User3.findByIdAndDelete(req.params.id)
  console.log('Deleted user:', result);
  res.json({ message: "User deleted" });
  // res.json()
}

