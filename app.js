import express from "express";
import Route from './routes/projects.routes.js'
import RouteApi from './api/routes/projects.api.routes.js'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/api', express.json());

app.use('/', Route);
app.use('/api', RouteApi);

app.listen(2222, function(){
    console.log("Servidor funcionando en el puerto 2222");
})
