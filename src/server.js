import express from './app/express.js';
import cors from 'cors';
import helmet from 'helmet';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

export default server;
