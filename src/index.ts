import express,{Request,Response} from 'express'
import home from './routes/default'
import cors from 'cors'

/* *** apis *** */
import apiSensor from './routes/api/sensor'
import apiTypeShield from './routes/api/typeshield'
import apiShield from './routes/api/shield'

import SocketIO, { Socket } from 'socket.io'
import Http from 'http'
import path from 'path'

class ServerWeb {
  public app: express.Application;
  public io: SocketIO.Server;
  private server: Http.Server;
  private port: number = 3000;

  constructor() {
    this.app = express();
    this.configuracion();
    this.middleware();
    this.rutas();

    this.server = Http.createServer(this.app);
    this.io = SocketIO(this.server);
  }

  configuracion() {
    this.app.set("puerto", this.port);
    this.app.use(
      "/socket.io",
      express.static(
        path.join(__dirname, "/node_modules/socket.io-client/dist")
      )
    );
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(
      cors({
        origin: "*",
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "X-Requested-With,content-type",
        credentials: true
      })
    );
  }

  rutas() {
    this.app.use("/", home)
    this.app.use("/api/sensors", apiSensor)
    this.app.use('/api/typeshilds' , apiTypeShield)
    this.app.use('/api/shilds' , apiShield)
  }

  SocketIo() {
    this.io.on("connection", socket => {
      socket.on("sensor", msg => {
        if (msg === "sensor-add") {
          this.io.emit("sensor-rpta", "add")
        }
      })

      socket.on("disconnect", function() {
        console.log("user disconnected")
      })
    })
  }

  start() {
    this.SocketIo();

    this.server.listen(this.app.get("puerto"), () => {
      console.log("server> Servidor UP")
    })
  }
}
const server = new ServerWeb()
server.start()
export default server.io
