import * as services from '../../services/client.services.js'

function getClients(req,res){
    services.getClients()
        .then(function(client){
            res.status(200).json(client)
        }).catch(function(err){
            res.status(400).json({ error:{ message: err.message }})
        })
}

function createClient(req,res){
    const { name, photo, description } = req.body;
    const client = { name, photo, description };
    services.createClient(client)
        .then(function(client){
            res.status(201).json(client)
        }).catch(function(err){
            res.status(400).json({ error: { message: err.message }})
        })
}

export {
    getClients,
    createClient
}