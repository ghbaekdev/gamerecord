import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.your.gg/kr/api/summoners',
});
