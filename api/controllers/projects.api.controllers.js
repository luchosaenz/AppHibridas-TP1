import * as services from '../../services/projects.services.js'
import { ObjectId } from 'mongodb'

function getProjects(req,res){
    services.getProjects()
        .then(function(projects){
            res.status(200).json(projects)
        }).catch(function(err){
            res.status(400).json({ error:{ message: err.message }})
        })
}

function updateProject(req,res){
    const id = req.params.idProject;
    let project = {}
    const { name, description, link, img, technologies, section, client_id } = req.body;
    if(name) project.name = name;
    if(description) project.description = description;
    if(link) project.link = link;
    if(img) project.img = img;
    if(technologies) project.technologies = technologies;
    if(section) project.section = section;
    services.updateProject(id, project, client_id)
        .then(function(response){
            if(response) res.status(200).json(response)
            else res.status(404).json({ error: { message: `No se encontro un proyecto con el id: ${id}`}})
        }).catch(function(err){
            res.status(400).json({ error:{ message: err.message }})
        })
}

function deleteProject(req,res){
    const id = req.params.idProject;
    services.deleteProject(id)
        .then(function(response){
            if(response) res.status(200).json(response)
            else res.status(404).json({error: { message: `No se encontro un proyecto con el id: ${id}`}})
        }).catch(function(err){
            res.status(400).json({ error:{ message: err.message }})
        })
}

function createProject(req,res){
    const { name, description, link, img, technologies, section, client_id } = req.body;
    const project = { name, description, link, img, technologies, section };
    services.createProject(project, client_id)
        .then(function(response){
            res.status(201).json(response)
        }).catch(function(err){
            res.status(400).json({ error:{ message: err.message }})
        })
}

function getProyectsByClient(req, res){
    const idCliente = req.params.idClient
    services.getProyectsByClient(idCliente)
        .then(function(projects){
            if(projects){
                res.status(200).json(projects)
            }else{
                res.status(200).json({})
            }
        })
}

export {
    getProjects,
    updateProject,
    deleteProject,
    createProject,
    getProyectsByClient
}