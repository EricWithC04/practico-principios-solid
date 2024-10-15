import { IVehicle } from "./vehicle.interface";

export interface IVehicleData {
    brand?: string
    model?: string
    year?: number
    price?: number
}

export interface IVehicleRepository {
    findById(id: number): Promise<IVehicle | null>
    create(data: IVehicleData): Promise<IVehicle>
    update(id: number, data: IVehicleData): Promise<IVehicle | null>
    delete(id: number): Promise<IVehicle | null>
}