import { IClient } from "./client.interface";

export interface IClientData {
    name?: string
    email?: string
    phone?: number
}

export interface IClientRepository {
    findById(id: number): Promise<IClient | null>
    create(data: IClientData): Promise<IClient>
    update(id: number, data: IClientData): Promise<IClient | null>
    delete(id: number): Promise<IClient | null>
}