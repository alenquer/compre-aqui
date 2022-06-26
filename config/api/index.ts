import axios from 'axios';
import { sleep } from '../../utils';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  await sleep(1500);

  return config;
});
