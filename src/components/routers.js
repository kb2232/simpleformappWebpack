import axios from 'axios';

const Router = axios.create({
  baseURL:"https://api.unsplash.com",
  Headers:{
    Authorization:'Client-ID e7d7701f79b7d4f80010c8a5003288f02688f291b51770110682258307c8a1f1'
  }
})
export {Router};