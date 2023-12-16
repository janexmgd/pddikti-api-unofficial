import axios from 'axios';

const queryHitMhs = (q) =>
  new Promise(async (resolve, reject) => {
    try {
      const req = await axios.get(
        'https://api-frontend.kemdikbud.go.id/hit_mhs/' + q
      );
      resolve(req.data);
    } catch (error) {
      reject(error);
    }
  });
export default queryHitMhs;
