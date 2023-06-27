import express from 'express';
import * as controllers from '../controllers/projects.controllers.js'

const route = express.Router();

route.get('/projects/', controllers.getProjects);
route.get('/projects/:idProject', controllers.getProjectById);

export default route;