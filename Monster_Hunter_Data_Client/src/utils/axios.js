import axios from 'axios';


export const monsterHunterWorld = axios.create({
    baseURL: "https://mhw-db.com",
  })
export const serverSide = axios.create({
    baseURL: "http://localhost:3000",
  })