import axios from 'axios'

const endpoint =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'production'
    ? 'https://simple-notes-db-01.herokuapp.com'
    : 'http://localhost:1337'

export const api = axios.create({
  baseURL: endpoint,
  timeout: 15000
})
