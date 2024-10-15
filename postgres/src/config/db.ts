import { Sequelize } from "sequelize"
import { DB } from "../environments/environments"

const sequelize = new Sequelize(`${DB.dialect}://${DB.user}:${DB.password}@${DB.host}:${DB.port}/${DB.name}`)

export { sequelize }