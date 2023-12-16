import axios from 'axios';

const queryHit = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const req = await axios.get(
        'https://api-frontend.kemdikbud.go.id/hit/' + query
      );
      resolve(req.data);
    } catch (error) {
      reject(error);
    }
  });
export default queryHit;
