import axios from 'axios';
import { API_URL } from '../helper/url.js';

const detailPT = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const req = await axios.get(API_URL + '/detail_pt/' + id);
      console.log(req.data);
    } catch (error) {
      reject(error);
    }
  });
detailPT('MTUzNjhDRDEtRjdGMi00QjNGLThENzEtRkNEMjMwQzUyMzk1');
