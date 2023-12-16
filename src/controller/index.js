import service from '../service/index.js';
import response from '../helper/response.js';
const { queryHit, queryHitMhs } = service;
const { success, failed } = response;

const Controller = {
  search: async (req, res, next) => {
    try {
      const { q } = req.query;
      if (!req.query || !q) {
        return failed(res, {
          code: 400,
          status: 'error' || 'failed',
          message: 'bad request no query provided',
        });
      }
      const hit = await queryHit(q);
      const hitMhs = await queryHitMhs(q);
      const { dosen, prodi, pt } = hit;
      const { mahasiswa } = hitMhs;

      const data = { dosen: dosen, prodi: prodi, pt: pt, mahasiswa: mahasiswa };
      success(res, {
        code: 200,
        status: 'success',
        message: 'success get data',
        data: data,
      });
    } catch (error) {
      return failed(res, {
        code: error.code || 500,
        status: 'error' || 'failed',
        message: error.message || 'internal server error',
      });
    }
  },
};
export default Controller;
