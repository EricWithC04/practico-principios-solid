import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import { PORT } from "./environments/environments"

class Server {
    private app: Application
    private port: number

    constructor() {
        this.app = express()
        this.port = parseInt(PORT)
        this.connectDB()
        this.middlewares()
        this.routes()
    }

    public connectDB() {

    }

    public middlewares() {
        this.app.use(morgan("dev"))
        this.app.use(cors())
        this.app.use(helmet())
    }

    public routes() {

    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

}

export default Server