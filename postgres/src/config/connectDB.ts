import { sequelize } from "./db";

export const connectDB = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log("Conexion con la base de datos establecida.")

            sequelize.sync({ force: true, logging: false })
                .then(() => {
                    console.log("Base de datos sincronizada.")
                })
        })
        .catch((err) => {
            console.error(err)
        })
}