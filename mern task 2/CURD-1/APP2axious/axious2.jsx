import axios from 'axios'

const API = axios.create({
  baseURL: 'https://www.omdbapi.com/'
})

export const Axious2 = (pg) => {
  return (API.get(`?i=tt3896198&apikey=1c12799f&s=titanic&page=${pg}`))
}
