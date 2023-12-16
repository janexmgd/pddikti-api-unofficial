import express from '../app/express.js';

import Controller from '../controller/index.js';
const { search } = Controller;

const Router = express.Router();

Router.get('/search', search);

export default Router;
