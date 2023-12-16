import express from './app/express.js';
import cors from 'cors';
import helmet from 'helmet';

import Router from './router/index.js';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(Router);

export default server;
