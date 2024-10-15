import { IVehicle } from "../interfaces/vehicle.interface";
import { IVehicleRepository, IVehicleData } from "../interfaces/vehicleRepository.interface";

let vehiclesMongo: Array<IVehicle> = []
let vehiclesPostgres: Array<IVehicle> = []

class MongoVehicleRepository implements IVehicleRepository {
    async findById(id: number) {
        const vehicle = vehiclesMongo.find(vehicle => vehicle.id === id)
        return vehicle ? vehicle : null
    }

    async create(data: IVehicleData) {
        const newVehicle: IVehicle = {
            id: vehiclesMongo.length === 0 ? 1 : vehiclesMongo[vehiclesMongo.length - 1].id + 1,
            brand: data.brand!,
            model: data.model!,
            year: data.year!,
            price: data.price!,
        }

        vehiclesMongo.push(newVehicle)
        return newVehicle
    }

    async update(id: number, data: IVehicleData) {
        const vehicle = vehiclesMongo.find(vehicle => vehicle.id === id)
        if (vehicle) {
            data.brand ? vehicle.brand = data.brand : null
            data.model ? vehicle.model = data.model : null
            data.year ? vehicle.year = data.year : null
            data.price ? vehicle.price = data.price : null
        }
        return vehicle ? vehicle : null
    }

    async delete(id: number) {
        const vehicle = vehiclesMongo.find(vehicle => vehicle.id === id)
        if (!vehicle) return null

        const restVehicles = vehiclesMongo.filter(vehicle => vehicle.id !== id)
        
        vehiclesMongo = [...restVehicles]
        return vehicle
    }
}

class PostgresVehicleRepository implements IVehicleRepository {
    async findById(id: number) {
        const vehicle = vehiclesPostgres.find(vehicle => vehicle.id === id)
        return vehicle ? vehicle : null
    }

    async create(data: IVehicleData) {
        const newVehicle: IVehicle = {
            id: vehiclesPostgres.length === 0 ? 1 : vehiclesPostgres[vehiclesPostgres.length - 1].id + 1,
            brand: data.brand!,
            model: data.model!,
            year: data.year!,
            price: data.price!,
        }

        vehiclesPostgres.push(newVehicle)
        return newVehicle
    }

    async update(id: number, data: IVehicleData) {
        const vehicle = vehiclesPostgres.find(vehicle => vehicle.id === id)
        if (vehicle) {
            data.brand ? vehicle.brand = data.brand : null
            data.model ? vehicle.model = data.model : null
            data.year ? vehicle.year = data.year : null
            data.price ? vehicle.price = data.price : null
        }
        return vehicle ? vehicle : null
    }

    async delete(id: number) {
        const vehicle = vehiclesPostgres.find(vehicle => vehicle.id === id)
        if (!vehicle) return null

        const restVehicles = vehiclesPostgres.filter(vehicle => vehicle.id !== id)
        
        vehiclesPostgres = [...restVehicles]
        return vehicle
    }
}

export { MongoVehicleRepository, PostgresVehicleRepository }