import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getClients(){
    await client.connect()
    return db.collection("Cliente").find().toArray()
}

async function createClient(cliente){
    await client.connect()
    await db.collection("Cliente").insertOne(cliente)
    return cliente
}

export {
    getClients,
    createClient,

}