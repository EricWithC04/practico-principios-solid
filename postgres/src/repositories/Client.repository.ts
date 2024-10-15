import { IClient } from "../interfaces/client.interface";
import { IClientRepository, IClientData } from "../interfaces/clientRepository.interface";

let clientsMongo: Array<IClient> = []
let clientsPostgres: Array<IClient> = []

class MongoClientRepository implements IClientRepository {
    async findById(id: number) {
        const client = clientsMongo.find(client => client.id === id)
        return client ? client : null
    }

    async create(data: IClientData) {
        const newClient: IClient = {
            id: clientsMongo.length === 0 ? 1 : clientsMongo[clientsMongo.length - 1].id + 1,
            name: data.name!,
            email: data.email!,
            phone: data.phone!,
        }

        clientsMongo.push(newClient)
        return newClient
    }

    async update(id: number, data: IClientData) {
        const client = clientsMongo.find(client => client.id === id)
        if (client) {
            data.name ? client.name = data.name : null
            data.email ? client.email = data.email : null
            data.phone ? client.phone = data.phone : null
        }
        return client ? client : null
    }

    async delete(id: number) {
        const client = clientsMongo.find(client => client.id === id)
        if (!client) return null

        const restClients = clientsMongo.filter(client => client.id !== id)
        
        clientsMongo = [...restClients]
        return client
    }
}

class PostgresClientRepository implements IClientRepository {
    async findById(id: number) {
        const client = clientsPostgres.find(client => client.id === id)
        return client ? client : null
    }

    async create(data: IClientData) {
        const newClient: IClient = {
            id: clientsPostgres.length === 0 ? 1 : clientsPostgres[clientsPostgres.length - 1].id + 1,
            name: data.name!,
            email: data.email!,
            phone: data.phone!,
        }

        clientsPostgres.push(newClient)
        return newClient
    }

    async update(id: number, data: IClientData) {
        const client = clientsPostgres.find(client => client.id === id)
        if (client) {
            data.name ? client.name = data.name : null
            data.email ? client.email = data.email : null
            data.phone ? client.phone = data.phone : null
        }
        return client ? client : null
    }

    async delete(id: number) {
        const client = clientsPostgres.find(client => client.id === id)
        if (!client) return null

        const restClients = clientsPostgres.filter(client => client.id !== id)
        
        clientsPostgres = [...restClients]
        return client
    }
}

export { MongoClientRepository, PostgresClientRepository }