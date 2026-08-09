import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  withCredentials: false,
  headers: {
    'Authorization': 'Bearer 7fe0bca9-374f-4403-b697-17d8ea89477e',
    'Content-Type': 'application/json',
  },
});