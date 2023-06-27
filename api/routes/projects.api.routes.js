import { Router } from 'express'
import * as controllers from '../controllers/projects.api.controllers.js'
import clientRoutes from './client.api.routes.js'

const route = Router()

route.get('/projects', controllers.getProjects);
route.patch('/projects/:idProject', controllers.updateProject);
route.delete('/projects/:idProject', controllers.deleteProject);
route.post('/projects', controllers.createProject);

route.get('/projects/:idClient/client', controllers.getProyectsByClient)
route.use(clientRoutes)

export default route;