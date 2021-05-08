import axios from 'axios'

const endpoint = 'http://localhost:1337'

export const api = axios.create({
  baseURL: endpoint,
  timeout: 15000
})
