import axios from 'axios';


export const monsterHunterWorld = axios.create({
    baseURL: "https://mhw-db.com/",
  })