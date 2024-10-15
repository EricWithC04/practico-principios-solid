import { Dialect } from "sequelize"
import "dotenv/config"

export const PORT = process.env.PORT!
export const DB = {
    host: process.env.DB_HOST!,
    port: process.env.DB_PORT!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB!,
    dialect: process.env.DB_DIALECT as Dialect
}