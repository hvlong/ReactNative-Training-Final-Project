import axios from 'axios';
import { URL_END_POINT } from '../helper/constants';

export const Api = axios.create({
  baseURL: URL_END_POINT,
  responseType: 'json'
});

export const configApiKey = (key: string) => {
  if (key) {
    Api.defaults.params = {};
    Api.defaults.params['api_key'] = key;
  }
};
