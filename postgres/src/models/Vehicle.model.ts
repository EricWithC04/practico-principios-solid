import { sequelize } from "../config/db";
import { DataTypes, Model } from "sequelize";
import { IVehicle } from "../interfaces/vehicle.interface";

class VehicleModel extends Model<IVehicle> implements IVehicle {
    public id!: number;
    public brand!: string;
    public model!: string;
    public year!: number;
    public price!: number;
}

VehicleModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize, modelName: "vehicles" })

export { VehicleModel }