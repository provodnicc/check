import axios from 'axios'

const $AUTH_API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})


export {$AUTH_API}