import axios from 'axios'

export const BASE_URL = 'http://localhost:4000'

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})