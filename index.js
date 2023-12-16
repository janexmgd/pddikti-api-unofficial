import 'dotenv/config.js';

import server from './src/server.js';

const APP_PORT = process.env.APP_PORT;
const APP_NAME = process.env.APP_NAME;
console.clear();
server.listen(APP_PORT || 3098, '0.0.0.0', () => {
  console.log(`${APP_NAME} is running ar PORT ${APP_PORT}`);
});
server.get('/', (req, res) => {
  res.status(200).send({
    APP_NAME,
    status: 'ok',
    message: 'made with by janexmgd',
  });
});
