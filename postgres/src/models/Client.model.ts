import { sequelize } from "../config/db";
import { DataTypes, Model } from "sequelize";
import { IClient } from "../interfaces/client.interface";

class ClientModel extends Model<IClient> implements IClient {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: number;
}

ClientModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize, modelName: "clients" })

export { ClientModel }