import * as services from '../services/projects.services.js'
import * as view from '../views/projects.view.js';

function getProjects(req, res){
    const section = req.query.section
    services.getProjects(section)
    .then(function(projects,section){
        res.send(view.createProjectsListPage(projects,section))
    })
}
function getProjectById(req, res){
    const idProject = req.params.idProject
    console.log("idProject", idProject)
    services.getProjectById(idProject)
    .then(function(project){
        res.send(view.createProjectPage(project))
    })
}

export {
    getProjects,
    getProjectById
}