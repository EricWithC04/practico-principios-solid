import { IVehicleData, IVehicleRepository } from "../interfaces/vehicleRepository.interface";
import { MongoVehicleRepository, PostgresVehicleRepository } from "../repositories/Vehicle.repository";

class VehicleService implements IVehicleRepository {
    private repository: IVehicleRepository

    constructor () {
        this.repository = new MongoVehicleRepository()
    }

    public async findById(id: number) {
        return await this.repository.findById(id)
    }

    public async create(data: IVehicleData) {
        return await this.repository.create(data)
    }

    public async update(id: number, data: IVehicleData) {
        return await this.repository.update(id, data)
    }

    public async delete(id: number) {    
        return await this.repository.delete(id)
    }
}

export default new VehicleService()