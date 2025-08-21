import axios from 'axios'

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const Getpost = () => {
  return (API.get('/posts'))
}

export const DeletePost=(id)=>{
  return API.delete(`/posts/${id}`)
}

export const PostingData=(data)=>{
  return API.post('/posts',data)
}