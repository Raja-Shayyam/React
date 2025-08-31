import axios from 'axios'

// npx json-server --watch db.json --port 5000 //!   run it for

export const API = axios.create({
  baseURL: 'http://192.168.10.7:3000/mongoosAXIOS',
})

export const Getpost = () => {
  return (API.get('/user'))
}

export const Getone =(id)=>{
  return API.get(`user/${id}`)
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