import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getProjects(section){
    let filter = section ? {section, deleted: {$ne: true}} : {deleted: {$ne: true}}
    await client.connect()
    return db.collection("Projects").find(filter).toArray()
}

async function getProjectById(id){
    await client.connect()
    const projecto = await db.collection("Projects").findOne({_id: new ObjectId(id)})
    return projecto
}

async function updateProject(id, project, clienId){
    const newProyect = clienId?{...project, client_id: new ObjectId(clienId)}: project
    await client.connect()
    await db.collection('Projects').updateOne({_id: new ObjectId(id)}, {$set: newProyect})
    return newProyect
}

async function deleteProject(id){
    await client.connect()
    await db.collection('Projects').deleteOne({_id: new ObjectId(id)})
    return true
}

async function createProject(project,clienId){
    const newProyect = clienId?{...project, client_id: new ObjectId(clienId)}: project
    await client.connect()
    await db.collection('Projects').insertOne(newProyect)
    return project
}

async function getProyectsByClient(idClient){
    console.log("idCliente:", idClient);
    await client.connect()
    return await db.collection("Projects").findOne({ client_id: new ObjectId(idClient)})
}

export {
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    createProject,
    getProyectsByClient
}