import { IClientData, IClientRepository } from "../interfaces/clientRepository.interface";
import { MongoClientRepository, PostgresClientRepository } from "../repositories/Client.repository";

class ClientService implements IClientRepository {
    private repository: IClientRepository

    constructor () {
        this.repository = new MongoClientRepository()
    }

    public async findById(id: number) {
        return await this.repository.findById(id)
    }

    public async create(data: IClientData) {
        return await this.repository.create(data)
    }

    public async update(id: number, data: IClientData) {
        return await this.repository.update(id, data)
    }

    public async delete(id: number) {    
        return await this.repository.delete(id)
    }
}

export default new ClientService()