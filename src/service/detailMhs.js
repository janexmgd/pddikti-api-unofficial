import axios from 'axios';
import { API_URL } from '../helper/url.js';
const detailMhs = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const req = await axios.get(API_URL + '/detail_mhs/' + id);
      resolve(req.data);
    } catch (error) {
      reject(error);
    }
  });
export default detailMhs;
