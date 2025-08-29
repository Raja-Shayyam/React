import axios from 'axios'

// npx json-server --watch db.json --port 5000 //!   run it for

const API = axios.create({
  baseURL: 'http://localhost:3000/auxios',
})

export const Getpost = () => {
  return (API.get('/user'))
}

export const  DeletePost=(id)=>{
  return API.delete(`/user/${id}`)
}

export const PostingData=(data)=>{
  return API.post('/user',data)
}

export const UpdateUser = (id, data) => {
  return API.put(`/user/${id}`, data)  
  // or API.patch(`/user/${id}`, data)
}