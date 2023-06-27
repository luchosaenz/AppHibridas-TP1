import  { Router } from 'express'
import * as controllers from '../controllers/client.api.controllers.js'

const route = Router()

route.get('/client', controllers.getClients)
route.post('/client', controllers.createClient)

export default route;